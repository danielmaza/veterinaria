import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Consulta } from 'src/app/models/consulta.model';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-consulta-edit',
  templateUrl: './consulta-edit.component.html',
  styleUrls: ['./consulta-edit.component.css']
})
export class ConsultaEditComponent {
  consulta: Consulta;

  constructor(private consultaService: ConsultaService,
              private router: Router,
              private activatedRoute: ActivatedRoute){

              }
  
  ngOnInit(): void {
    this.consulta=this.consultaService.get(this.activatedRoute.snapshot.params['id']);
  }

  public actualizar(){
    this.consultaService.update(this.consulta);
    this.salir();
  }

  public salir(){
    this.router.navigate(['/consultas'])
  }
}
