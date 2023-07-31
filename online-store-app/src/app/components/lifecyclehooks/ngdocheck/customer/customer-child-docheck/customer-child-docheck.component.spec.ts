import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerChildDocheckComponent } from './customer-child-docheck.component';

describe('CustomerChildDocheckComponent', () => {
  let component: CustomerChildDocheckComponent;
  let fixture: ComponentFixture<CustomerChildDocheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerChildDocheckComponent]
    });
    fixture = TestBed.createComponent(CustomerChildDocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
