import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SolicitudModel } from './solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  BASE_URL='http://localhost:4000';
  constructor(private http: HttpClient) {
  }

  //Lista completa de solicitudes
  obtenerSolicitudes(){
    return this.http.get<SolicitudModel[]>(`${this.BASE_URL}/solicitudes/buscar`);
  }

  //Buscar una solicitudes por ID
  obtenerSolicitud(idSolicitud:string){
    return this.http.get<SolicitudModel>(`${this.BASE_URL}/solicitudes/buscarId/${idSolicitud}`);
  }

  //Crear una solicitudes
  agregarSolicitud(solicitud: SolicitudModel){
    return this.http.post<string>(`${this.BASE_URL}/solicitudes/crear`,solicitud);
  }

  //Actualizar una solicitudes
  actualizarSolicitud(solicitud: SolicitudModel){
    return this.http.put<string>(`${this.BASE_URL}/solicitudes/actualizar/${solicitud.solicitudId}`,solicitud);
  }

  //ELiminar una solicitudes
  borrarSolicitud(idSolicitud: string){
    return this.http.delete<string>(`${this.BASE_URL}/solicitudes/eliminar/${idSolicitud}`);
  }
}
