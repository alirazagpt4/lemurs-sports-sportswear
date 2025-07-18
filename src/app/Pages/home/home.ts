import { Component } from '@angular/core';
import { Router , RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MatCardModule , CommonModule , RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  constructor(private router:Router){}

  goToCategory(category:string){
      this.router.navigate(['/products/' , category])
  }

}
