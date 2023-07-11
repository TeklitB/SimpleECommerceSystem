import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-parent-docheck',
  templateUrl: './customer-parent-docheck.component.html',
  styleUrls: ['./customer-parent-docheck.component.css']
})
export class CustomerParentDocheckComponent {
  title = 'ngOnChanges';
  message = '';
  customer: Customer = new Customer();
  name= '';
  code= 0;
 
  updateCustomer() {
    this.customer.name = this.name;
    this.customer.code = this.code;
  }
}
