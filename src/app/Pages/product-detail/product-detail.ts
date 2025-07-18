import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Services/product';
import { CommonModule } from '@angular/common';
import { MatCard  , MatCardActions , MatCardContent , MatCardTitle} from '@angular/material/card';



@Component({
  selector: 'app-product-detail',
  imports: [CommonModule , MatCard , MatCardActions , MatCardContent , MatCardTitle],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetail implements OnInit {
 product:any;
//  whatsappLink: string = '';

 constructor( private route : ActivatedRoute , private productService : Product){}


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProducts().subscribe((data)=>{
      this.product = data.find((p:any) =>p.id == id)
    })
  }

  get whatsappLink(): string {
    const text = encodeURIComponent(`Hello, I am interested in:\n\n*${this.product.title}*`);
    return `https://wa.me/923473626700?text=${text}`; // <-- update with real number
  }
}
