import { IRestaurant } from "src/app/restaurants/models/restaurant.model";

export interface IBooking {
    id: number;
    firstName: string;
    lastName: string;
    peopleNumber: string;
    bookingDate: Date;
    bookingTime: string;
    notes: string;
    phone: string;
    email: string;
    restaurant: Partial<IRestaurant>;
    // user: Partial<IUser>;
    //restaurantId: number;// Aqui habria que guardar el restaurante como IRestaurant?
}
// TODO: faltaría por meter el userId
