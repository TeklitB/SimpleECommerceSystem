import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerParentDocheckComponent } from './customer-parent-docheck.component';

describe('CustomerParentDocheckComponent', () => {
  let component: CustomerParentDocheckComponent;
  let fixture: ComponentFixture<CustomerParentDocheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerParentDocheckComponent]
    });
    fixture = TestBed.createComponent(CustomerParentDocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
