export interface IBooking {
    id: number;
    bookDate: Date;
    bookTime: string[];
    userId: number;
    restaurantId: number;
    availability: boolean;
    peopleNumber: number;
}
