import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { Mascota } from 'src/app/models/mascota.model';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-cliente-mascota',
  templateUrl: './cliente-mascota.component.html',
  styleUrls: ['./cliente-mascota.component.css']
})
export class ClienteMascotaComponent implements OnInit {
  mascotas: Mascota[] = [];
  cliente: Cliente;

  constructor(private mascotaService: MascotaService,
              private clienteService: ClienteService,
              private router: Router,
              private activatedRoute: ActivatedRoute

  ) {
    //this.mascotas = this.mascotaService.getAllforCliente(1);
  }
  ngOnInit(): void {
    this.cliente=this.clienteService.get(this.activatedRoute.snapshot.params['id']);
    this.mascotas = this.mascotaService.getAllforCliente(this.activatedRoute.snapshot.params['id']);
  }
}
