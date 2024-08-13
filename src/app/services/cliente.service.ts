import { Injectable } from '@angular/core';

//
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private count:number = 1;
  private clientes: Cliente[] = [];

  constructor() {
    let cliente1 = new Cliente();
    cliente1._id = 1;
    cliente1.dni = '12345678';
    cliente1.apellidos = 'Pérez';
    cliente1.nombres = 'Juan';
    cliente1.email='juan@email';
    cliente1.telefono='999 999 999';
    cliente1.direccion='Piura';

    this.clientes.push(cliente1);
   }

  public getAll():Cliente[]{
    return Object.assign([],this.clientes);
  }

  public get(id:number):Cliente{
    return Object.assign({},this.clientes.filter(item => item._id == id)[0]);
  }

  public add(cliente:Cliente){
    this.count++;
    cliente._id = this.count;
    this.clientes.push(cliente)
  }

  public update(cliente:Cliente){
    let index = this.clientes.findIndex(item => item._id === cliente._id);
    if(index > -1){
      this.clientes[index] = cliente;
    }
  }

  public delete(id:number){
    let index = this.clientes.findIndex(item => item._id === id);
    if(index > -1){
      this.clientes.splice(index,1);
    }
  }

  public cantidad():number{
    return this.clientes.length;
  }

  public getCount():number{
    return this.count;
  }
}
