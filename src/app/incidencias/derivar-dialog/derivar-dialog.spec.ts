import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivarDialogComponent } from './derivar-dialog';

describe('DerivarDialog', () => {
  let component: DerivarDialogComponent;
  let fixture: ComponentFixture<DerivarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DerivarDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerivarDialogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
