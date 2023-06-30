export interface IRestaurant {
    id: number;
    name: string;
    address: string;
    city: string;
    phone: string;
    web: string;
    mail: string;
    averagePrice: number;
    rating: number;
    availability: boolean;
    typeFood: string;
    images: []; // como se pone en el fronted este atributo del backend???
}
