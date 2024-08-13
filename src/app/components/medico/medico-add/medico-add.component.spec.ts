import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoAddComponent } from './medico-add.component';

describe('MedicoAddComponent', () => {
  let component: MedicoAddComponent;
  let fixture: ComponentFixture<MedicoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoAddComponent]
    });
    fixture = TestBed.createComponent(MedicoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
