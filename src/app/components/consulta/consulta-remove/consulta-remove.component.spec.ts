import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRemoveComponent } from './consulta-remove.component';

describe('ConsultaRemoveComponent', () => {
  let component: ConsultaRemoveComponent;
  let fixture: ComponentFixture<ConsultaRemoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaRemoveComponent]
    });
    fixture = TestBed.createComponent(ConsultaRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
