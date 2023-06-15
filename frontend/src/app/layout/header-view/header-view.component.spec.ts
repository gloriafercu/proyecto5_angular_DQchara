import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderViewComponent } from './header-view.component';

describe('HeaderViewComponent', () => {
  let component: HeaderViewComponent;
  let fixture: ComponentFixture<HeaderViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderViewComponent]
    });
    fixture = TestBed.createComponent(HeaderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
