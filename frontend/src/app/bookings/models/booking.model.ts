import { IRestaurant } from "src/app/restaurants/models/restaurant.model";
import { IUser } from "src/app/users/models/user.model";

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
    user?: any;
}
