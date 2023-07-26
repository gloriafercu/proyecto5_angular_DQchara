export interface IRestaurant {
    id: number;
    name: string;
    address: string;
    city: string;
    phone: string;
    web: string;
    email: string;
    averagePrice: number;
    rating: number ;
    ratings: number[];
    availability: boolean;
    typeFood: string;
    photos: [];
    iframe: string;
    [key: string]: any;
//    restaurant?: Partial<IRestaurant>;
}
