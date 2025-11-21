import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { MenuPrincipalComponent} from './menu-principal/menu-principal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuPrincipalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('US_App');
}
