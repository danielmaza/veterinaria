import { Component } from '@angular/core';

import { Medico } from '../../../models/medico.model';
import { MedicoService } from '../../../services/medico.service';

@Component({
  selector: 'app-medico-list',
  templateUrl: './medico-list.component.html',
  styleUrls: ['./medico-list.component.css']
})
export class MedicoListComponent {
  medicos: Medico[] = [];

  constructor(private medicoService: MedicoService) {
    this.medicos = this.medicoService.getAll();
  }
}
