import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//
import { Cliente } from '../../../models/cliente.model';
import { ClienteService } from './../../../services/cliente.service';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit{
  cliente: Cliente;

  constructor(private clienteService: ClienteService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) { }

    ngOnInit(): void {
      this.cliente=this.clienteService.get(this.activatedRoute.snapshot.params['id']);
    }

    public actualizar() {
      this.clienteService.update(this.cliente);
      this.salir();
    }

    /*public eliminar(){
      this.clienteService.delete(this.cliente._id);
      this.salir();
    }*/

    public salir(){
      this.router.navigate(['/clientes'])
    }

}
