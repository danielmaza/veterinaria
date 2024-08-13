import { Component } from '@angular/core';

import { Consulta } from '../../../models/consulta.model';
import { ConsultaService } from '../../../services/consulta.service';

@Component({
  selector: 'app-consulta-list',
  templateUrl: './consulta-list.component.html',
  styleUrls: ['./consulta-list.component.css']
})
export class ConsultaListComponent {
  consultas: Consulta[] = [];

  constructor(private consultaService: ConsultaService) {
    this.consultas = this.consultaService.getAll();
    console.log(this.consultas);
  }
}
