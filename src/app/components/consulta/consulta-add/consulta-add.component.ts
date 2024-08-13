import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Consulta } from '../../../models/consulta.model';
import { ConsultaService } from '../../../services/consulta.service';

@Component({
  selector: 'app-consulta-add',
  templateUrl: './consulta-add.component.html',
  styleUrls: ['./consulta-add.component.css']
})
export class ConsultaAddComponent {
  consulta: Consulta = new Consulta();

  constructor(private consultaService: ConsultaService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) { }

  public add(){
    this.consultaService.add(this.consulta);
    this.salir();
  }

  public salir(){
    this.router.navigate(['/consultas']);
  }
}
