import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { EditarInteresadosComponent } from './editar-interesados/editar-interesados.component';
import { ListaInteresadosComponent } from './lista-interesados/lista-interesados.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { EditarSolicitudesComponent } from './editar-solicitudes/editar-solicitudes.component';

const routes: Routes = [
  // Grupo de mascotas
  { path: 'mascotas', component: ListaMascotasComponent },
  { path: 'mascotas/editar/:idMascota', component: EditarMascotasComponent },
  { path: 'mascotas/agregar', component: EditarMascotasComponent },

  // Grupo de interesados
  { path: 'interesados', component: ListaInteresadosComponent },
  { path: 'interesados/editar/:idInteresado', component: EditarInteresadosComponent },
  { path: 'interesados/agregar', component: EditarInteresadosComponent },

  // Grupo de interesados
  { path: 'solicitudes', component: ListaSolicitudesComponent },
  { path: 'solicitudes/editar/:idSolicitud', component: EditarSolicitudesComponent },
  { path: 'solicitudes/agregar', component: EditarSolicitudesComponent },

  // Redirección por defecto (comodín)
  { path: '', redirectTo: '/mascotas', pathMatch: 'full' },
  { path: '**', redirectTo: '/mascotas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
