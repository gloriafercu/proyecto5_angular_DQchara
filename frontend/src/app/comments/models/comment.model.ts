import { IRestaurant } from "src/app/restaurants/models/restaurant.model";

export interface IComment {
    id: number;
    rating: number;
    description: string;
    restaurant: Partial<IRestaurant>;
    user?: any;
    //user?: Partial<IUser>;
    createdDate?: Date;
}
