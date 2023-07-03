import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-child',
  templateUrl: './customer-child.component.html',
  styleUrls: ['./customer-child.component.css']
})
export class CustomerChildComponent implements OnChanges, OnInit{
  @Input() message: string | undefined;
  @Input() customer: Customer | undefined;
  changelog: string[] = [];

  ngOnInit() {
      console.log('OnInit');
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
