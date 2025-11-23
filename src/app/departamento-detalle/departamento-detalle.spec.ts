import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoDetalleComponent } from './departamento-detalle';

describe('DepartamentoDetalle', () => {
  let component: DepartamentoDetalleComponent;
  let fixture: ComponentFixture<DepartamentoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartamentoDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoDetalleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
