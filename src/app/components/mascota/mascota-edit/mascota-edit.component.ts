import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//
import { Mascota } from 'src/app/models/mascota.model';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-mascota-edit',
  templateUrl: './mascota-edit.component.html',
  styleUrls: ['./mascota-edit.component.css']
})
export class MascotaEditComponent {
  mascota: Mascota;

  constructor(private mascotaService: MascotaService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.mascota=this.mascotaService.get(this.activatedRoute.snapshot.params['id']);
  }

  public actualizar(){
    this.mascotaService.update(this.mascota);
    this.salir();
  }

  /*public eliminar(){
    this.mascotaService.delete(this.mascota._id);
    this.salir();
  }*/

  public salir(){
    this.router.navigate(['/mascotas'])
  }
}
