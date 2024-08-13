import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Mascota } from '../../../models/mascota.model';
import { MascotaService } from '../../../services/mascota.service';


@Component({
  selector: 'app-mascota-add',
  templateUrl: './mascota-add.component.html',
  styleUrls: ['./mascota-add.component.css']
})
export class MascotaAddComponent {
  mascota: Mascota = new Mascota();

  constructor(private mascotaService: MascotaService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) { }

  public add(){
    this.mascotaService.add(this.mascota);
    this.salir();
  }

  public salir(){
    this.router.navigate(['/mascotas']);
  }
}
