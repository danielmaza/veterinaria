import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Medico } from '../../../models/medico.model';
import { MedicoService } from '../../../services/medico.service';

@Component({
  selector: 'app-medico-remove',
  templateUrl: './medico-remove.component.html',
  styleUrls: ['./medico-remove.component.css']
})
export class MedicoRemoveComponent implements OnInit {
  medico: Medico;

  constructor(private medicoService: MedicoService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) { }

    ngOnInit(): void {
      this.medico=this.medicoService.get(this.activatedRoute.snapshot.params['id']);
    }

    public eliminar(){
      this.medicoService.delete(this.medico._id);
      this.salir();
    }

    public salir(){
      this.router.navigate(['/medicos'])
    }

}
