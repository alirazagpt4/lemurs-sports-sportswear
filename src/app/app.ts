import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Footer } from './Components/footer/footer';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Header , Footer , MatSidenavModule , MatToolbarModule , MatIconModule , MatListModule,MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Arslan-Webapp';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('✅ Route changed to:', event.url);
      }
    });
  }
}
