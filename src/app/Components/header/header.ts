import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
// CommonModule
// MatNavList




@Component({
  selector: 'app-header',
  imports: [MatToolbarModule , RouterModule , MatNavList , MatSidenav , MatSidenavContainer,MatIcon , CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {

  testClick() {
    console.log('Button clicked ✅');
  }
  

  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }


  isMobileView = false;

ngOnInit() {
  this.checkMobileView();
  window.addEventListener('resize', () => this.checkMobileView());
}

checkMobileView() {
  this.isMobileView = window.innerWidth <= 768;
}

}
