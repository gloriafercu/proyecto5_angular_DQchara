import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent  {

  restaurantForm = new FormGroup({
    restaurantId: new FormControl(0),
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [ Validators.minLength(5), Validators.maxLength(100)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern("^[69][0-9]{9}$")]),
    web: new FormControl('', [Validators.required]),
    mail:  new FormControl('', [Validators.required, Validators.email]),
    averagePrice:  new FormControl(''),
    rating:  new FormControl(''),
    availability: new FormControl(false),
    typeFood: new FormControl('')
  })

  

}
