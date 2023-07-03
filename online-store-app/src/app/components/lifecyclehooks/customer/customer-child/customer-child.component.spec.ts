import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerChildComponent } from './customer-child.component';

describe('CustomerChildComponent', () => {
  let component: CustomerChildComponent;
  let fixture: ComponentFixture<CustomerChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerChildComponent]
    });
    fixture = TestBed.createComponent(CustomerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
