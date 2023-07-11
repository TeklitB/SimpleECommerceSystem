import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyvaluediffersChildDocheckComponent } from './keyvaluediffers-child-docheck.component';

describe('KeyvaluediffersChildDocheckComponent', () => {
  let component: KeyvaluediffersChildDocheckComponent;
  let fixture: ComponentFixture<KeyvaluediffersChildDocheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyvaluediffersChildDocheckComponent]
    });
    fixture = TestBed.createComponent(KeyvaluediffersChildDocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
