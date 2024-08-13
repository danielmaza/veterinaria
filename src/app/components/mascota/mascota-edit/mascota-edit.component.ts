import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

import { Mascota } from 'src/app/models/mascota.model';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-mascota-edit',
  templateUrl: './mascota-edit.component.html',
  styleUrls: ['./mascota-edit.component.css']
})
export class MascotaEditComponent {
  mascota: Mascota;
  especie: string[]=[];
  clientes: Cliente[]=[];


  constructor(private mascotaService: MascotaService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private clienteService: ClienteService

  ) { 
    this.especie=['Perro','Gato','Pez','Roedor','Ave','Reptil','Otro'];
    //this.mascota.sexo='Macho';
    //this.mascota.especie='Perro';
    this.clientes = this.clienteService.getAll();

  }

  ngOnInit(): void {
    this.mascota=this.mascotaService.get(this.activatedRoute.snapshot.params['id']);
  }

  public actualizar(){
    this.mascotaService.update(this.mascota);
    this.salir();
  }

  /*public eliminar(){
    this.mascotaService.delete(this.mascota._id);
    this.salir();
  }*/
  public getEspecies():string[]{
    return this.especie;
  }

  public salir(){
    this.router.navigate(['/mascotas'])
  }
}
