import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShippingCost } from 'src/app/models/shippingcost';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit{
  shippingCosts!: Observable<ShippingCost[]>;

  constructor(
    private cartService: CartService
  ){}

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
