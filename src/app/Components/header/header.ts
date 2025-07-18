import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
MatNavList




@Component({
  selector: 'app-header',
  imports: [MatToolbarModule , RouterModule , MatNavList , MatSidenav , MatSidenavContainer,MatIcon],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  testClick() {
    console.log('Button clicked ✅');
  }
  

  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}
