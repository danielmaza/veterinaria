import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAddComponent } from './consulta-add.component';

describe('ConsultaAddComponent', () => {
  let component: ConsultaAddComponent;
  let fixture: ComponentFixture<ConsultaAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaAddComponent]
    });
    fixture = TestBed.createComponent(ConsultaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
