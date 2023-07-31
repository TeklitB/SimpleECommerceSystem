import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Products : IProduct[] = [
    {
      Id:"1",
      Title:"Pen",
      Price: 100,
      inStock: true 
    },
    {
      Id:"2",
      Title:"Pencil",
      Price: 200,
      inStock: false 
    },
    {
      Id:"3",
      Title:"Book",
      Price: 500,
      inStock: true 
    }
  ]
  products$ : BehaviorSubject<IProduct[]>;
  
  constructor() {
    this.products$ = new BehaviorSubject<IProduct[]>(this.Products);
   }
  
   AddProduct(p: IProduct): void{
    this.Products.push(p);
    this.products$.next(this.Products);
   }
}
