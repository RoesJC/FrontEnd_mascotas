import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitudService } from '../shared/solicitud.service';
import { SolicitudModel } from '../shared/solicitud.model';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrl: './lista-solicitudes.component.css'
})
export class ListaSolicitudesComponent {
  solicitudes: Observable<SolicitudModel[]> | undefined;
  constructor(private solicitudService: SolicitudService){}
  ngOnInit() {
    this.solicitudes=this.solicitudService.obtenerSolicitudes();
  }

  borrarSolicitud(idSolicitud:string){
    this.solicitudService.borrarSolicitud(idSolicitud).subscribe({
      next: data=>{
        console.log(`Registro Eliminado`);
        this.ngOnInit();
      },
      error: err=>{
        console.log(`Error al eliminar Registro ${err}`);
      }
    });
  }
}
