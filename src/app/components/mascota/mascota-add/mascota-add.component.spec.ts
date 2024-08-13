import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaAddComponent } from './mascota-add.component';

describe('MascotaAddComponent', () => {
  let component: MascotaAddComponent;
  let fixture: ComponentFixture<MascotaAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotaAddComponent]
    });
    fixture = TestBed.createComponent(MascotaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
