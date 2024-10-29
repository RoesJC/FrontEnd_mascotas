import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SolicitudModel } from "../shared/solicitud.model";
import { SolicitudService } from "../shared/solicitud.service";
import { MascotaService } from "../shared/mascota.service";
import { InteresadoService } from "../shared/interesado.service";
import { MascotaModel } from "../shared/mascota.model";
import { InteresadoModel } from "../shared/interesado.model";

@Component({
  selector: 'app-editar-solicitudes',
  templateUrl: './editar-solicitudes.component.html',
  styleUrls: ['./editar-solicitudes.component.css']
})
export class EditarSolicitudesComponent implements OnInit {
  idSolicitud = '';
  solicitud = new SolicitudModel('', '', '', '', '');

  mascotas: MascotaModel[] = [];
  interesados: InteresadoModel[] = [];

  // Opciones para el campo "Estado"
  estados: string[] = ['Aprobado', 'Rechazado', 'Pendiente'];

  constructor(
    private solicitudService: SolicitudService,
    private mascotaService: MascotaService,
    private interesadoService: InteresadoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idSolicitud = this.route.snapshot.params['idSolicitud'];

    if (this.idSolicitud) {
      this.cargarSolicitud();
    }

    this.cargarMascotas(); // Cargar lista de mascotas
    this.cargarInteresados(); // Cargar lista de interesados
  }

  cargarSolicitud(): void {
    this.solicitudService.obtenerSolicitud(this.idSolicitud).subscribe({
      next: (data) => {
        console.log('Solicitud cargada:', data);
        this.solicitud = data;
      },
      error: (err) => console.error('Error al cargar la solicitud:', err)
    });
  }

  cargarMascotas(): void {
    this.mascotaService.obtenerMascotas().subscribe({
      next: (data) => {
        console.log('Mascotas cargadas:', data);
        this.mascotas = data;
      },
      error: (err) => console.error('Error al cargar las mascotas:', err)
    });
  }

  cargarInteresados(): void {
    this.interesadoService.obtenerInteresados().subscribe({
      next: (data) => {
        console.log('Interesados cargados:', data);
        this.interesados = data;
      },
      error: (err) => console.error('Error al cargar los interesados:', err)
    });
  }

  onSubmit(): void {
    const solicitudObservable = this.solicitud.solicitudId
      ? this.solicitudService.actualizarSolicitud(this.solicitud)
      : this.solicitudService.agregarSolicitud(this.solicitud);

    solicitudObservable.subscribe({
      next: (data) => {
        console.log('Operación exitosa:', data);
        this.router.navigate(['/solicitudes']);
      },
      error: (err) => console.error('Error en la operación:', err)
    });
  }
}

