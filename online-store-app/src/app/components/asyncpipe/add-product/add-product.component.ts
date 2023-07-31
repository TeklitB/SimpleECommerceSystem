import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  constructor(private fb: FormBuilder, private appService: ProductService) {
    this.productForm = this.fb.group({
      Id: ["", Validators.required],
      Title: ["", Validators.required],
      Price: [],
      inStock: []
    })
  }

  ngOnInit(): void {
      
  }

  addProduct() {
    if (this.productForm.valid) {
      this.appService.AddProduct(this.productForm.value);
    }
  }
}
