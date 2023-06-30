import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { ShippingCost } from '../models/shippingcost';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  constructor(
    private httClient: HttpClient
  ) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Observable<ShippingCost[]>{
    return this.httClient.get<ShippingCost[]>('assets/shipping.json')
  }
}
