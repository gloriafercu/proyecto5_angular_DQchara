import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFormImagesComponent } from './restaurant-form-images.component';

describe('RestaurantFormImagesComponent', () => {
  let component: RestaurantFormImagesComponent;
  let fixture: ComponentFixture<RestaurantFormImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantFormImagesComponent]
    });
    fixture = TestBed.createComponent(RestaurantFormImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
