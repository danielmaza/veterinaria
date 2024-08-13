import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ReuseStrategyCustome } from './customes/reuse-strategy.custome';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { MenuComponent} from './components/menu/menu.component';
import { BienvenidaComponent } from './components/boxes/bienvenida.component';

//componentes
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteAddComponent } from './components/cliente/cliente-add/cliente-add.component';
import { ClienteEditComponent } from './components/cliente/cliente-edit/cliente-edit.component';
import { ClienteRemoveComponent } from './components/cliente/cliente-remove/cliente-remove.component';

import { MedicoListComponent } from './components/medico/medico-list/medico-list.component';
import { MedicoAddComponent } from './components/medico/medico-add/medico-add.component';
import { MedicoEditComponent } from './components/medico/medico-edit/medico-edit.component';
import { MedicoRemoveComponent } from './components/medico/medico-remove/medico-remove.component';

import { MascotaListComponent } from './components/mascota/mascota-list/mascota-list.component';
import { MascotaAddComponent } from './components/mascota/mascota-add/mascota-add.component';
import { MascotaEditComponent } from './components/mascota/mascota-edit/mascota-edit.component';
import { MascotaRemoveComponent } from './components/mascota/mascota-remove/mascota-remove.component';

import { ConsultaListComponent } from './components/consulta/consulta-list/consulta-list.component';
import { ConsultaAddComponent } from './components/consulta/consulta-add/consulta-add.component';
import { ConsultaEditComponent } from './components/consulta/consulta-edit/consulta-edit.component';
import { ConsultaRemoveComponent } from './components/consulta/consulta-remove/consulta-remove.component';

import { ClienteMascotaComponent } from './components/cliente/cliente-mascota/cliente-mascota.component';


const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  //{ path: 'login', component: LoginComponent },
  { path: '', component: BienvenidaComponent},
  { path: 'home', component: BienvenidaComponent},

  { path:'clientes', component: ClienteListComponent },
  { path:'clientes/add', component: ClienteAddComponent },
  { path:'clientes/edit/:id', component: ClienteEditComponent},
  { path:'clientes/remove/:id', component: ClienteRemoveComponent},

  {path:'medicos', component: MedicoListComponent},
  { path:'medicos/add', component: MedicoAddComponent },
  { path:'medicos/edit/:id', component: MedicoEditComponent},
  { path:'medicos/remove/:id', component: MedicoRemoveComponent},

  { path:'mascotas', component: MascotaListComponent},
  { path:'mascotas/add', component: MascotaAddComponent },
  { path:'mascotas/edit/:id', component: MascotaEditComponent},
  { path:'mascotas/remove/:id', component: MascotaRemoveComponent},

  { path:'consultas', component: ConsultaListComponent},
  { path:'consultas/add', component: ConsultaAddComponent },
  { path:'consultas/edit/:id', component: ConsultaEditComponent},
  { path:'consultas/remove/:id', component: ConsultaRemoveComponent},

  { path:'cliente-mascota/:id', component: ClienteMascotaComponent },


  { path: '**', redirectTo: '', pathMatch: 'full' } //esta línea debe estar al final de las rutas (wildcard)
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: ReuseStrategyCustome}
  ]
})
export class AppRoutingModule { }
