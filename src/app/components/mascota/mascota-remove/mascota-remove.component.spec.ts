import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaRemoveComponent } from './mascota-remove.component';

describe('MascotaRemoveComponent', () => {
  let component: MascotaRemoveComponent;
  let fixture: ComponentFixture<MascotaRemoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotaRemoveComponent]
    });
    fixture = TestBed.createComponent(MascotaRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
