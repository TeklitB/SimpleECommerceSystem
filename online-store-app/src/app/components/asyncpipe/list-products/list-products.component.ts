import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../models/product';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush//Default
})
export class ListProductsComponent implements OnInit {
  products?: Observable<IProduct[]>;
  productSubscription?: Subscription;

  constructor(private appService: ProductService,
    private cd: ChangeDetectorRef // OnPUsh doesn't detect changes from observable. use ChangeDetectorRef 
    ) { }

  /* productObserver = {
    next: (data: IProduct[]) => { 
      this.products = data; 
      this.cd.markForCheck(); //enable the component to detect changes from observable
    },
    error: (error: any) => { console.log(error) },
    complete: () => { console.log('product stream completed ') }
  } */

  ngOnInit(): void {
    // this.productSubscription = this.appService.products$;//.subscribe(this.productObserver)
    this.products = this.appService.products$;
  }

  // ngOnDestroy(): void {
  //   if (this.productSubscription) {
  //     this.productSubscription.unsubscribe();
  //   }
  // }
}
