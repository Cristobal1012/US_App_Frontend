import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincipalComponent } from './menu-principal.component';

describe('MenuPrincipalComponent', () => {
  let component: MenuPrincipalComponent;
  let fixture: ComponentFixture<MenuPrincipalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPrincipalComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
