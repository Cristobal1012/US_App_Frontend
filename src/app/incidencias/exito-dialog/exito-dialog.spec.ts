import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitoDialog } from './exito-dialog';

describe('ExitoDialog', () => {
  let component: ExitoDialog;
  let fixture: ComponentFixture<ExitoDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExitoDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitoDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
