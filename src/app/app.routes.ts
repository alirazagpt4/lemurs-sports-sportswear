import { Routes } from '@angular/router';
import { ProductList } from './Pages/product-list/product-list';
import { ProductDetail } from './Pages/product-detail/product-detail';
import { Home } from './Pages/home/home';

const routes: Routes = [
    { path: '', component: Home },
    { path: 'products/:category', component: ProductList },
    { path: 'product/:id', component: ProductDetail }
  ];

  export const APP_ROUTES = routes;
