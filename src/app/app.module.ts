import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MascotaService } from './shared/mascota.service';
import { provideHttpClient } from '@angular/common/http';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { FormsModule } from '@angular/forms';
import { ListaInteresadosComponent } from './lista-interesados/lista-interesados.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { EditarInteresadosComponent } from './editar-interesados/editar-interesados.component';
import { EditarSolicitudesComponent } from './editar-solicitudes/editar-solicitudes.component';
import { InteresadoService } from './shared/interesado.service';
import { SolicitudService } from './shared/solicitud.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaMascotasComponent,
    EditarMascotasComponent,
    ListaInteresadosComponent,
    ListaSolicitudesComponent,
    EditarInteresadosComponent,
    EditarSolicitudesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    MascotaService,
    InteresadoService,
    SolicitudService,
    provideHttpClient(),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
