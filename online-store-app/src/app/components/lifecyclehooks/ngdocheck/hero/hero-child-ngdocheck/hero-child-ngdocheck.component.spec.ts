import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroChildNgdocheckComponent } from './hero-child-ngdocheck.component';

describe('HeroChildNgdocheckComponent', () => {
  let component: HeroChildNgdocheckComponent;
  let fixture: ComponentFixture<HeroChildNgdocheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroChildNgdocheckComponent]
    });
    fixture = TestBed.createComponent(HeroChildNgdocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
