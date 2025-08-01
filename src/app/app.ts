import {
  Component
} from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
  Router,
  RouterOutlet
} from '@angular/router';

import {
  Header
} from './Components/header/header';
import {
  Footer
} from './Components/footer/footer';

import {
  MatSidenavModule
} from '@angular/material/sidenav';
import {
  MatToolbarModule
} from '@angular/material/toolbar';
import {
  MatIconModule
} from '@angular/material/icon';
import {
  MatListModule
} from '@angular/material/list';
import {
  MatButtonModule
} from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Footer,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatProgressBar,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'OceanStyleAppreal';
  isLoading = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart || event instanceof NavigationStart) {
        this.isLoading = true;
      }

      if (event instanceof RouteConfigLoadEnd || event instanceof NavigationEnd) {
        this.isLoading = false;
      }
    });
  }
}
