import { IRestaurant } from "src/app/restaurants/models/restaurant.model";


export enum UserRole {
    USER = 'user',
    REST = 'rest',
    ADMIN = 'admin'
  }
export interface IUser {
    id: number;
    firstName?: string;
    lastName?: string;
    email: string;
    password?: string;
    phone?: string;
    userName: string;
    avatar?: string;
    role?: UserRole;
    restaurant?: Partial<IRestaurant>;

}
