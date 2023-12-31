import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { products } from 'src/app/data/products';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product: Product | undefined;
  products: Product[] = [...products]

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ){}

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = this.products.find(prod => prod.id === productId);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!")
  }
}
