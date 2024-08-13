import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//
import { Cliente } from '../../../models/cliente.model';
import { ClienteService } from './../../../services/cliente.service';


@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent {
  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) { }

  public add() {
    this.clienteService.add(this.cliente);
    this.salir();
  }

  public salir(){
    this.router.navigate(['/clientes']);
  }
}
