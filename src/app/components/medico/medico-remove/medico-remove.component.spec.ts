import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoRemoveComponent } from './medico-remove.component';

describe('MedicoRemoveComponent', () => {
  let component: MedicoRemoveComponent;
  let fixture: ComponentFixture<MedicoRemoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoRemoveComponent]
    });
    fixture = TestBed.createComponent(MedicoRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
