import { Component } from '@angular/core';


import { Cliente } from '../../../models/cliente.model';
import { ClienteService } from './../../../services/cliente.service';


@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent {
  clientes: Cliente[]=[];

  constructor(private clienteService: ClienteService) {
    this.clientes = this.clienteService.getAll();
  }
}
