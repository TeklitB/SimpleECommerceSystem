import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandAsyncPipeComponent } from './understand-async-pipe.component';

describe('UnderstandAsyncPipeComponent', () => {
  let component: UnderstandAsyncPipeComponent;
  let fixture: ComponentFixture<UnderstandAsyncPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnderstandAsyncPipeComponent]
    });
    fixture = TestBed.createComponent(UnderstandAsyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
