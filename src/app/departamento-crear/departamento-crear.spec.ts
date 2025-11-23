import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoCrear } from './departamento-crear';

describe('DepartamentoCrear', () => {
  let component: DepartamentoCrear;
  let fixture: ComponentFixture<DepartamentoCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartamentoCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoCrear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
