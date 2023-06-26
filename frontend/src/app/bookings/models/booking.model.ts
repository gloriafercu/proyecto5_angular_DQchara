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
    restaurantId: number;
}

// faltarían por meter el userId y el restaurantId
