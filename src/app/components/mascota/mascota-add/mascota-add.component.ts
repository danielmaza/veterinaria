import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

import { Mascota } from '../../../models/mascota.model';
import { MascotaService } from '../../../services/mascota.service';


@Component({
  selector: 'app-mascota-add',
  templateUrl: './mascota-add.component.html',
  styleUrls: ['./mascota-add.component.css']
})
export class MascotaAddComponent {
  mascota: Mascota = new Mascota();
  especie: string[]=[];
  clientes: Cliente[]=[];

  constructor(private mascotaService: MascotaService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private clienteService: ClienteService
  ) { 
    
    this.especie=['Perro','Gato','Pez','Roedor','Ave','Reptil','Otro'];
    this.mascota.sexo='Macho';
    this.mascota.especie='Perro';
    this.clientes = this.clienteService.getAll();
  }

  public add(){
    this.mascotaService.add(this.mascota);
    this.salir();
  }

  public getEspecies():string[]{
    return this.especie;
  }

  public salir(){
    this.router.navigate(['/mascotas']);
  }
}
