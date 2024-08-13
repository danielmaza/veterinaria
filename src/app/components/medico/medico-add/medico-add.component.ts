import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//
import { Medico } from 'src/app/models/medico.model';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-medico-add',
  templateUrl: './medico-add.component.html',
  styleUrls: ['./medico-add.component.css']
})
export class MedicoAddComponent {
  medico: Medico = new Medico();
  constructor(private medicoService: MedicoService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) { }

  public add() {
    this.medicoService.add(this.medico);
    this.salir();
  }

  public salir(){
    this.router.navigate(['/medicos']);
  }
}
