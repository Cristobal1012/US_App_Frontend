import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoListarComponent } from './departamento-listar';

describe('DepartamentoListarComponent', () => {
  let component: DepartamentoListarComponent;
  let fixture: ComponentFixture<DepartamentoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartamentoListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoListarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
