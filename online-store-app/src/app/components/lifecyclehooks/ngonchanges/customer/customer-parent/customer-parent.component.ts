import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-parent',
  templateUrl: './customer-parent.component.html',
  styleUrls: ['./customer-parent.component.css']
})
export class CustomerParentComponent {
  title = 'ngOnChanges';
  message = '';
  customer: Customer = new Customer(123, "Herman");
  name= '';
  code= 0;
 
  updateCustomer() {
    this.customer.name = this.name;
    this.customer.code = this.code;
  }
}
