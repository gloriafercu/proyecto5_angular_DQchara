import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IRestaurant } from '../models/restaurant.model';
import { RestaurantService } from '../restaurant.service';


@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent {

  restaurants: IRestaurant[] = [];

  cities: string[] = [
    "Barcelona",
    "Cuenca",
    "León",
    "Lugo",
    "Madrid",
    "Palencia",
    "Sevilla",
    "Toledo",
    "Valencia",
    "Valladolid"
  ];

  food: string[] = [
    "Brasileña",
    "Española",
    "India",
    "Japonesa",
    "Mexicana",
    "Italiana"
  ];

  restaurantForm = new FormGroup({
    id: new FormControl<number>(0),
    name: new FormControl<string>('', [Validators.required]),
    address: new FormControl<string>('', [Validators.required]),
    city: new FormControl<string>('', [Validators.required]),
    phone: new FormControl<string>('', [Validators.required, Validators.pattern('^[679]{1}[0-9]{8}$')]),
    web: new FormControl<string>(''),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    averagePrice: new FormControl<number>(0, [Validators.required, Validators.min(5), Validators.max(500)]),
    availability: new FormControl<boolean>(true),
    typeFood: new FormControl<string>(''),
    iframe: new FormControl<string>('')
  });



  constructor(private restaurantService: RestaurantService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      const idString = params['id'];
      if (!idString) return;
      const id = parseInt(idString, 10);
      this.restaurantService.getById(id).subscribe(restaurant => this.loadRestaurantForm(restaurant));
    });

    // CONDICIONAL (/restaurants/rest): SI ES Rest TRAER EL Restaurante ASOCIADO AL rest
    this.activatedRoute.url.subscribe(url => {
      console.log(url[0].path);
      // comprueba si en la url pone la palabra rest
      if (url[0].path !== 'rest') return;

      this.restaurantService.getRestaurantByAuthenticatedRest().subscribe(restaurant => this.loadRestaurantForm(restaurant));
    });
  }

  loadRestaurantForm(restaurant: IRestaurant): void {

    this.restaurantForm.reset({
      id: restaurant.id,
      name: restaurant.name,
      address: restaurant.address,
      city: restaurant.city,
      phone: restaurant.phone,
      web: restaurant.web,
      email: restaurant.email,
      averagePrice: restaurant.averagePrice,
      availability: restaurant.availability,
      typeFood: restaurant.typeFood,
      iframe: restaurant.iframe
    });
  }

  save(): void {
    let id = this.restaurantForm.get('id')?.value ?? 0;
    let name = this.restaurantForm.get('name')?.value ?? '';
    let address = this.restaurantForm.get('address')?.value ?? '';
    let city = this.restaurantForm.get('city')?.value ?? '';
    let phone = this.restaurantForm.get('phone')?.value ?? '';
    let web = this.restaurantForm.get('web')?.value ?? '';
    let email = this.restaurantForm.get('email')?.value ?? '';
    let averagePrice = this.restaurantForm.get('averagePrice')?.value ?? 0;
    let availability = this.restaurantForm.get('availability')?.value ?? true;
    let typeFood = this.restaurantForm.get('typeFood')?.value ?? '';
    let iframe = this.restaurantForm.get('iframe')?.value ?? '';


    let restaurant: IRestaurant = {
      id: id,
      name: name,
      address: address,
      city: city,
      phone: phone,
      web: web,
      email: email,
      averagePrice: averagePrice,
      rating: 0,
      availability: availability,
      typeFood: typeFood,
      iframe: iframe,
      photos: []
    }

    if (id === 0) // nuevo
      this.restaurantService.create(restaurant).subscribe(restaurant => {
        console.log(restaurant);
        this.router.navigate(['/restaurants', restaurant.id]);
      });
     else // editar restaurante existente
     this.restaurantService.update(restaurant).subscribe(restaurant => this.router.navigate(['/restaurants', restaurant.id]));
  }

}
