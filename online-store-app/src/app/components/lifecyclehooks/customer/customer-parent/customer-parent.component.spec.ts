import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerParentComponent } from './customer-parent.component';

describe('CustomerParentComponent', () => {
  let component: CustomerParentComponent;
  let fixture: ComponentFixture<CustomerParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerParentComponent]
    });
    fixture = TestBed.createComponent(CustomerParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
