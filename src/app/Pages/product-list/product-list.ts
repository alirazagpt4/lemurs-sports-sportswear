import { Component, OnInit } from '@angular/core';
import { Product } from '../../Services/product';
import { CommonModule } from '@angular/common'; // ✅ yeh zaroori hai
import { MatCardModule } from '@angular/material/card'; // ✅ for mat-card
import { MatButtonModule } from '@angular/material/button'; // ✅ for buttons
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  // products : any[] = [];
  category: string = '';
  allProducts: any[] = [];
  filteredProducts: any[] = [];

  constructor(
    private productService: Product,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category') || '';
      this.loadProducts();
    });
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.allProducts = data;

      console.log('Route Category:', this.category);
      console.log('All Products:', this.allProducts);

      this.filteredProducts = this.allProducts.filter(
        (product) =>
          product.category.toLowerCase() === this.category.toLowerCase()
      );

      console.log('Filtered Products:', this.filteredProducts);
    });
  }

  goToDetail(product: any) {
    this.router.navigate(['/product', product.id]);
  }
}
