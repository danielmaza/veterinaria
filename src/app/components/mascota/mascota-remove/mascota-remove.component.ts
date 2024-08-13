import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Mascota } from '../../../models/mascota.model';
import { MascotaService } from '../../../services/mascota.service';

@Component({
  selector: 'app-mascota-remove',
  templateUrl: './mascota-remove.component.html',
  styleUrls: ['./mascota-remove.component.css']
})
export class MascotaRemoveComponent implements OnInit {
  mascota: Mascota;

  constructor(private mascotaService: MascotaService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.mascota=this.mascotaService.get(this.activatedRoute.snapshot.params['id']);
  }

  public eliminar(){
    this.mascotaService.delete(this.mascota._id);
    this.salir();
  }

  public salir(){
    this.router.navigate(['/mascotas'])
  }
}
