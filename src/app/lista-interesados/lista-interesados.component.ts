import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InteresadoService } from '../shared/interesado.service';
import { InteresadoModel } from '../shared/interesado.model';

@Component({
  selector: 'app-lista-interesados',
  templateUrl: './lista-interesados.component.html',
  styleUrl: './lista-interesados.component.css'
})
export class ListaInteresadosComponent {
  interesados: Observable<InteresadoModel[]> | undefined;
  constructor(private interesadoService: InteresadoService){}
  ngOnInit() {
    this.interesados=this.interesadoService.obtenerInteresados();
  }

  borrarInteresado(idInteresado:string){
    this.interesadoService.borrarInteresado(idInteresado).subscribe({
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
