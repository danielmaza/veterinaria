import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Medico } from '../../../models/medico.model';
import { MedicoService } from '../../../services/medico.service';

@Component({
  selector: 'app-medico-edit',
  templateUrl: './medico-edit.component.html',
  styleUrls: ['./medico-edit.component.css']
})
export class MedicoEditComponent {
  medico: Medico;

  constructor(private medicoService: MedicoService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) { }

    ngOnInit(): void {
      this.medico=this.medicoService.get(this.activatedRoute.snapshot.params['id']);
    }

    public actualizar(){
      this.medicoService.update(this.medico);
      this.salir();
    }

    public salir(){
      this.router.navigate(['/medicos'])
    }
}
