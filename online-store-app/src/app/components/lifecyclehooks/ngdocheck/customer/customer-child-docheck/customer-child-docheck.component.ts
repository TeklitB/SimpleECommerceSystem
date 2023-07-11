import { Component, DoCheck, Input, KeyValueDiffers, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-child-docheck',
  templateUrl: './customer-child-docheck.component.html',
  styleUrls: ['./customer-child-docheck.component.css']
})
export class CustomerChildDocheckComponent implements OnChanges, DoCheck, OnInit {
  @Input() message: string;
  @Input() customer: Customer;
  changelog: string[] = [];
  oldCustomer: Customer= new Customer();
  DocheckCount = 0;
  differ: any;

  constructor(private differs: KeyValueDiffers) {}

  ngOnInit() {
      console.log('OnInit');
      // cloning the customer object into the oldCustomer
      this.oldCustomer = Object.assign({}, this.customer);
      this.differ = this.differs.find(this.customer).create();
  }

  ngDoCheck() {
      console.log('Docheck');
      this.DocheckCount++;
      if (this.oldCustomer.name !== this.customer.name || this.oldCustomer.code !== this.customer.code ) {
          const to  = JSON.stringify(this.customer);
          const from = JSON.stringify(this.oldCustomer);
          const changeLog = `DoCheck customer: changed from ${from} to ${to} `;
          this.changelog.push(changeLog);

          this.oldCustomer = Object.assign({}, this.customer);
      }

      const customerChanges = this.differ.diff(this.customer);
 
        if (customerChanges) {
            console.log(customerChanges);
            customerChanges.forEachChangedItem((r: any) =>  this.changelog.push('changed ' + r.key + ' ' + JSON.stringify( r.currentValue)));
            customerChanges.forEachAddedItem((r: any) =>  this.changelog.push('added ' + r.key + ' ' + JSON.stringify( r.currentValue)));
            customerChanges.forEachRemovedItem((r: any) =>  this.changelog.push('removed ' + r.key + ' ' + JSON.stringify( r.currentValue)));
        }
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log('OnChanges');
      console.log(JSON.stringify(changes));

      // tslint:disable-next-line:forin
      for (const propName in changes) {
           const change = changes[propName];
           const to  = JSON.stringify(change.currentValue);
           const from = JSON.stringify(change.previousValue);
           const changeLog = `${propName}: changed from ${from} to ${to} `;
           this.changelog.push(changeLog);
      }
  }
}
