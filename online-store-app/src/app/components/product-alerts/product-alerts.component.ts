import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit{
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

  ngOnInit(): void {
    
  }
  
  notifyClient(){
    this.notify.emit();
  }
}
