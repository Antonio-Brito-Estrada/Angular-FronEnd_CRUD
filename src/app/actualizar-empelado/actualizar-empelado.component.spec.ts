import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEmpeladoComponent } from './actualizar-empelado.component';

describe('ActualizarEmpeladoComponent', () => {
  let component: ActualizarEmpeladoComponent;
  let fixture: ComponentFixture<ActualizarEmpeladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarEmpeladoComponent]
    });
    fixture = TestBed.createComponent(ActualizarEmpeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
