export interface Flight {
    id: number;
    flightNumber: string;
    destination: string;
    departureDateTime: Date;
    arrivalDateTime: Date;
    departureAirport: string;
    arrivalAirport: string;
    maxCapacity: number;
}

export interface FlightDTO {
    id: number;
    flightNumber: string;
    destination: string;
    departureDateTime: Date;
    arrivalDateTime: Date;
    departureAirport: string;
    arrivalAirport: string;
    maxCapacity: number;
}