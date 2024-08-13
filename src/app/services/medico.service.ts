import { Injectable } from '@angular/core';

//
import { Medico } from '../models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private count: number =1;
  private medicos: Medico[] = [];

  constructor() {
    let medico1 = new Medico();
    medico1._id = 1;
    medico1.dni = '12345678';
    medico1.apellidos = 'Pérez';
    medico1.nombres = 'Juan';
    medico1.especialidad = 'Medico general';

    this.medicos.push(medico1);
   }

   public getAll():Medico[]{
    return Object.assign([],this.medicos);
   }

   public get(id:number):Medico{
    return Object.assign({},this.medicos.filter(item => item._id == id)[0]);
   }

   public add(medico:Medico){
    this.count++;
    medico._id = this.count;
    this.medicos.push(medico);
   }

   public update(medico:Medico){
    let index = this.medicos.findIndex(item => item._id === medico._id);
    if(index > -1){
      this.medicos[index] = medico;
    }
   }

   public delete(id:number){
    let index = this.medicos.findIndex(item => item._id === id);
    if(index > -1){
      this.medicos.splice(index,1);
    }
   }

   public cantidad():number{
    return this.medicos.length;
   }

   public getCount():number{
    return this.count;
   }
}
