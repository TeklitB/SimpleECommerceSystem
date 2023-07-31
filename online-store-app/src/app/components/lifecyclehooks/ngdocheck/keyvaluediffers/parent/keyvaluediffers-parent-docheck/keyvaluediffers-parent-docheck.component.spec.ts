import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyvaluediffersParentDocheckComponent } from './keyvaluediffers-parent-docheck.component';

describe('KeyvaluediffersParentDocheckComponent', () => {
  let component: KeyvaluediffersParentDocheckComponent;
  let fixture: ComponentFixture<KeyvaluediffersParentDocheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyvaluediffersParentDocheckComponent]
    });
    fixture = TestBed.createComponent(KeyvaluediffersParentDocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
