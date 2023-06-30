import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/data/products';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] = [...products]
  ngOnInit(): void {
    
  }

  shareProduct(){
    window.alert("The product has been shared!")
  }

  onNotify(){
    window.alert("You will be notified when the product goes on sale")
  }
}
