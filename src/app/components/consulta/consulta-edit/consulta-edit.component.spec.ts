import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEditComponent } from './consulta-edit.component';

describe('ConsultaEditComponent', () => {
  let component: ConsultaEditComponent;
  let fixture: ComponentFixture<ConsultaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaEditComponent]
    });
    fixture = TestBed.createComponent(ConsultaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
