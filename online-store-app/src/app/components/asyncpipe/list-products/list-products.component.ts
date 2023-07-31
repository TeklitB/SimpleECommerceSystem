import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ListProductsComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  productSubscription?: Subscription;

  constructor(private appService: ProductService) { }

  productObserver = {
    next: (data: IProduct[]) => { this.products = data; },
    error: (error: any) => { console.log(error) },
    complete: () => { console.log('product stream completed ') }
  }

  ngOnInit(): void {
    this.productSubscription = this.appService.products$.subscribe(this.productObserver)
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }
}
