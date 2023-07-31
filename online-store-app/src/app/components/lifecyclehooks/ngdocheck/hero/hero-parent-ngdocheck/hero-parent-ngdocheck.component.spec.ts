import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroParentNgdocheckComponent } from './hero-parent-ngdocheck.component';

describe('HeroParentNgdocheckComponent', () => {
  let component: HeroParentNgdocheckComponent;
  let fixture: ComponentFixture<HeroParentNgdocheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroParentNgdocheckComponent]
    });
    fixture = TestBed.createComponent(HeroParentNgdocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
