import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: Product[] = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
    ) {}

    onSubmit(): void {
      // Process checkout data
      this.items = this.cartService.clearCart();
      window.alert("Your order has been submited");
      this.checkoutForm.reset();
    }
}
