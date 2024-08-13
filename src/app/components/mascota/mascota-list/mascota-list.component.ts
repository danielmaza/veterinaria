import { Component } from '@angular/core';

import { Mascota } from 'src/app/models/mascota.model';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-mascota-list',
  templateUrl: './mascota-list.component.html',
  styleUrls: ['./mascota-list.component.css']
})
export class MascotaListComponent {
  mascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService) {
    this.mascotas = this.mascotaService.getAll();
  }
}
