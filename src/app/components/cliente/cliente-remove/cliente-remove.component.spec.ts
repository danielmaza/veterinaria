import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteRemoveComponent } from './cliente-remove.component';

describe('ClienteRemoveComponent', () => {
  let component: ClienteRemoveComponent;
  let fixture: ComponentFixture<ClienteRemoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteRemoveComponent]
    });
    fixture = TestBed.createComponent(ClienteRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
