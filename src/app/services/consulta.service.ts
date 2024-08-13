import { Injectable } from '@angular/core';

//
import { Consulta } from '../models/consulta.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private count:number = 1;
  private consultas: Consulta[] = [];

  constructor() { 
    let consulta1 = new Consulta();
    consulta1._id = 1;
    consulta1.id_mascota = 1;
    consulta1.id_medico = 1;
    consulta1.fecha = '2022-01-01';
    consulta1.motivo = 'Motivo de la consulta';
    consulta1.diagnostico = 'Diagnóstico de la consulta';
    consulta1.tratamiento = 'Tratamiento de la consulta';

    this.consultas.push(consulta1);
  }

  public getAll():Consulta[]{
    return Object.assign([],this.consultas);
  }

  public get(id:number):Consulta{
    return Object.assign({},this.consultas.filter(item => item._id == id)[0]);
  }

  public add(consulta:Consulta){
    this.count++;
    consulta._id = this.count;
    this.consultas.push(consulta)
  }

  public update(consulta:Consulta){
    let index = this.consultas.findIndex(item => item._id === consulta._id);
    if(index > -1){
      this.consultas[index] = consulta;
    }
  }

  public delete(id:number){
    let index = this.consultas.findIndex(item => item._id === id);
    if(index > -1){
      this.consultas.splice(index,1);
    }
  }

  public cantidad():number{
    return this.consultas.length;
  }

  public getCount():number{
    return this.count;
  }
}
