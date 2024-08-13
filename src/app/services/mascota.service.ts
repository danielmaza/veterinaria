import { Injectable } from '@angular/core';

//
import { Mascota } from '../models/mascota.model';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private count:number = 1;
  private mascotas: Mascota[] = [];

  constructor() {
    let mascota1 = new Mascota();
    mascota1._id = 1;
    mascota1.id_cliente=1;
    mascota1.codigo='P01';
    mascota1.nombre = 'Firulais';
    mascota1.especie = 'Canino';
    mascota1.raza = 'Mestizo';
    mascota1.sexo = 'Macho';
    mascota1.fecha_nac = '2020-01-01';
    mascota1.activo = true;

    this.mascotas.push(mascota1);
  }

  public getAll():Mascota[]{
    return Object.assign([],this.mascotas);
  }

  public get(id:number):Mascota{
    return Object.assign({},this.mascotas.filter(item => item._id == id)[0]);
  }

  public getAllforCliente(id:number):Mascota[]{
    return Object.assign([],this.mascotas.filter(item => item.id_cliente == id));
  }

  public getAllforMascota():Mascota[]{
    return Object.assign([],this.mascotas);
  }

  public add(mascota:Mascota){
    this.count++;
    mascota._id = this.count;
    this.mascotas.push(mascota)
  }

  public update(mascota:Mascota){
    let index = this.mascotas.findIndex(item => item._id === mascota._id);
    if(index > -1){
      this.mascotas[index] = mascota;
    }
  }

  public delete(id:number){
    let index = this.mascotas.findIndex(item => item._id === id);
    if(index > -1){
      this.mascotas.splice(index,1);
    }
  }

  public cantidad():number{
    return this.mascotas.length;
  }

  public getCount():number{
    return this.count;
  }
}
