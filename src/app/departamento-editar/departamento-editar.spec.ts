import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoEditar } from './departamento-editar';

describe('DepartamentoEditar', () => {
  let component: DepartamentoEditar;
  let fixture: ComponentFixture<DepartamentoEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartamentoEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoEditar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
