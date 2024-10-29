import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InteresadoModel } from './interesado.model';

@Injectable({
  providedIn: 'root'
})
export class InteresadoService {

  BASE_URL='http://localhost:4000';
  constructor(private http: HttpClient) {
  }

  //Lista completa de Interesados
  obtenerInteresados(){
    return this.http.get<InteresadoModel[]>(`${this.BASE_URL}/interesados/buscar`);
  }

  //Buscar un interesado por ID
  obtenerInteresado(idInteresado:string){
    return this.http.get<InteresadoModel>(`${this.BASE_URL}/interesados/buscarId/${idInteresado}`);
  }

  //Crear un interesado
  agregarInteresado(interesado: InteresadoModel){
    return this.http.post<string>(`${this.BASE_URL}/interesados/crear`,interesado);
  }

  //Actualizar un interesado
  actualizarInteresado(interesado: InteresadoModel){
    return this.http.put<string>(`${this.BASE_URL}/interesados/actualizar/${interesado.interesId}`,interesado);
  }

  //ELiminar un interesados
  borrarInteresado(idInteresado: string){
    return this.http.delete<string>(`${this.BASE_URL}/interesados/eliminar/${idInteresado}`);
  }
}
