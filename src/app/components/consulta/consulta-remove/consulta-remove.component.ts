import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Consulta } from '../../../models/consulta.model';
import { ConsultaService } from '../../../services/consulta.service';

@Component({
  selector: 'app-consulta-remove',
  templateUrl: './consulta-remove.component.html',
  styleUrls: ['./consulta-remove.component.css']
})
export class ConsultaRemoveComponent implements OnInit {
  consulta: Consulta;

  constructor(private consultaService: ConsultaService,
              private router: Router,
              private activatedRoute: ActivatedRoute
            ){}

  ngOnInit(): void {
    this.consulta=this.consultaService.get(this.activatedRoute.snapshot.params['id']);
  }

  public eliminar(){
    this.consultaService.delete(this.consulta._id);
    this.salir();
  }

  public salir(){
    this.router.navigate(['/consultas'])
  }
}
