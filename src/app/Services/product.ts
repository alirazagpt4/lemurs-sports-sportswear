import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import data from '../data/data.json'
import { of } from 'rxjs';
// import { Data } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class Product {

  // products: typeof data = [];


  private dataUrl = '/data/data.json';
  
  
 

  constructor(private http : HttpClient){}

  getProducts():Observable<any[]> {
    console.log("this dataUrl : " , this.dataUrl)
    return this.http.get<any[]>(this.dataUrl);
    // console.log(this.products)
    // return of (this.products);

  }
  
}
