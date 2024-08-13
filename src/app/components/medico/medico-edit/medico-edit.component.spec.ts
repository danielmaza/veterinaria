import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoEditComponent } from './medico-edit.component';

describe('MedicoEditComponent', () => {
  let component: MedicoEditComponent;
  let fixture: ComponentFixture<MedicoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoEditComponent]
    });
    fixture = TestBed.createComponent(MedicoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
