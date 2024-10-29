import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { InteresadoModel } from "../shared/interesado.model";
import { InteresadoService } from "../shared/interesado.service";

@Component({
  selector: 'app-editar-interesados',
  templateUrl: './editar-interesados.component.html',
  styleUrl: './editar-interesados.component.css'
})
export class EditarInteresadosComponent {
  idInteresado= '';
  interesado=new InteresadoModel('','','','');
  constructor(private interesadoService: InteresadoService,private route: ActivatedRoute,private router: Router){
  }

    ngOnInit() {
        this.idInteresado = this.route.snapshot.params['idInteresado'];
        console.log(`El idInteresado es ${this.idInteresado}`);

        if (this.idInteresado) {
            //Viene de Editar
            console.log('La solicitud viene de Editar');
            this.interesadoService.obtenerInteresado(this.idInteresado).subscribe({
                next: data => {
                    console.log(data);
                    this.interesado = data;
                    console.log(this.interesado);
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
        if (this.interesado.interesId) {
            this.interesadoService.actualizarInteresado(this.interesado).subscribe({
                next: data => {
                    console.log(data);
                    this.router.navigate(['/interesados']);

                },
                error: err => {
                    console.log(`Error al actualizar ${err}`);
                }
            });
        }
        else {
            //Viene de Nueva Mascota
            this.interesadoService.agregarInteresado(this.interesado).subscribe({
                next: data => {
                    console.log(data);
                    this.router.navigate(['/interesados']);//#orden 20001196479105
                },
                error: err => {
                    console.log(`Error al Agregar ${err}`);
                }
            });
        }

    }
}
