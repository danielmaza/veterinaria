import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//componentes
import { ClienteAddComponent } from './components/cliente/cliente-add/cliente-add.component';
import { ClienteEditComponent } from './components/cliente/cliente-edit/cliente-edit.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { MascotaAddComponent } from './components/mascota/mascota-add/mascota-add.component';
import { MascotaEditComponent } from './components/mascota/mascota-edit/mascota-edit.component';
import { MascotaListComponent } from './components/mascota/mascota-list/mascota-list.component';
import { MedicoAddComponent } from './components/medico/medico-add/medico-add.component';
import { MedicoEditComponent } from './components/medico/medico-edit/medico-edit.component';
import { MedicoListComponent } from './components/medico/medico-list/medico-list.component';
import { ConsultaAddComponent } from './components/consulta/consulta-add/consulta-add.component';
import { ConsultaEditComponent } from './components/consulta/consulta-edit/consulta-edit.component';
import { ConsultaListComponent } from './components/consulta/consulta-list/consulta-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ClienteRemoveComponent } from './components/cliente/cliente-remove/cliente-remove.component';
import { MedicoRemoveComponent } from './components/medico/medico-remove/medico-remove.component';
import { MascotaRemoveComponent } from './components/mascota/mascota-remove/mascota-remove.component';
import { BienvenidaComponent } from './components/boxes/bienvenida.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { ConsultaRemoveComponent } from './components/consulta/consulta-remove/consulta-remove.component';
import { ClienteMascotaComponent } from './components/cliente/cliente-mascota/cliente-mascota.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteAddComponent,
    ClienteEditComponent,
    ClienteListComponent,
    MascotaAddComponent,
    MascotaEditComponent,
    MascotaListComponent,
    MedicoAddComponent,
    MedicoEditComponent,
    MedicoListComponent,
    ConsultaAddComponent,
    ConsultaEditComponent,
    ConsultaListComponent,
    ClienteRemoveComponent,
    MedicoRemoveComponent,
    MascotaRemoveComponent,
    BienvenidaComponent,
    MenuComponent,
    LoginComponent,
    ConsultaRemoveComponent,
    ClienteMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
