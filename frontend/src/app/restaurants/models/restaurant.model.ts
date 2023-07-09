export interface IRestaurant {
    id: number;
    name: string;
    address: string;
    city: string;
    phone: string;
    web: string;
    email: string;
    averagePrice: number;
    rating: number;
    availability: boolean;
    typeFood: string;
    photos: [];
    iframe: string;
    [key: string]: any;
}
