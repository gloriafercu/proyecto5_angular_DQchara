export interface IBooking {
    id: number;
    bookingDate: Date;
    bookingTime: string[];
    userId: number;
    restaurantId: number;
    availability: boolean;
    peopleNumber: number;
}
