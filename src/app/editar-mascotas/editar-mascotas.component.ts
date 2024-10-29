import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MascotaModel } from "../shared/mascota.model";
import { MascotaService } from "../shared/mascota.service";



@Component({
    selector: 'app-editar-mascotas',
    templateUrl: './editar-mascotas.component.html',
    styleUrl: './editar-mascotas.component.css'
})
export class EditarMascotasComponent implements OnInit {

  idMascota= '';
  mascota=new MascotaModel('','','','','','');
  constructor(private mascotaService: MascotaService,private route: ActivatedRoute,private router: Router){
  }

    ngOnInit() {
        this.idMascota = this.route.snapshot.params['idMascota'];
        console.log(`El idMascota es ${this.idMascota}`);

        if (this.idMascota) {
            //Viene de Editar
            console.log('La solicitud viene de Editar');
            this.mascotaService.obtenerMascota(this.idMascota).subscribe({
                next: data => {
                    console.log(data);
                    this.mascota = data;
                    console.log(this.mascota);
                },
                error: err => {
                    console.log(`Error ${err}`);
                }
            });

        }
        else {
            console.log('La solicitud viene de Nueva Mascota');
        }

    }

    onSubmit() {
        console.log("On Submit");
        //Viene de Editar
        if (this.mascota.mascotasId) {
            this.mascotaService.actualizarMascota(this.mascota).subscribe({
                next: data => {
                    console.log(data);
                    this.router.navigate(['/mascotas']);

                },
                error: err => {
                    console.log(`Error al actualizar ${err}`);
                }
            });
        }
        else {
            //Viene de Nueva Mascota
            this.mascotaService.agregarMascota(this.mascota).subscribe({
                next: data => {
                    console.log(data);
                    this.router.navigate(['/mascotas']);
                },
                error: err => {
                    console.log(`Error al Agregar ${err}`);
                }
            });
        }

    }
}

