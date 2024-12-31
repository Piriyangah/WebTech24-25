import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// drei Komponenten in die AppComponent eingebunden
import { HeaderComponent } from './header/header.component'; 
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NavComponent, FooterComponent], // importiert die drei Komponenten
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Uebung6';
}
