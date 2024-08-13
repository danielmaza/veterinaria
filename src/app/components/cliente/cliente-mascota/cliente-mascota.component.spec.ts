import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteMascotaComponent } from './cliente-mascota.component';

describe('ClienteMascotaComponent', () => {
  let component: ClienteMascotaComponent;
  let fixture: ComponentFixture<ClienteMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteMascotaComponent]
    });
    fixture = TestBed.createComponent(ClienteMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
