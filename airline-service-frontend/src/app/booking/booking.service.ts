import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, of } from 'rxjs';

import { Bookings, BookingsDTO } from './booking';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookingURL = environment.bookingURL;

  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  
  getBookings(): Observable<Bookings[]> {
    return this.http.get<Bookings[]>(this.bookingURL, this.httpOptions);   
  }
  getBookingFromPassenger(id: number): Observable<Bookings[]> {
    let url = `${this.bookingURL}/Passenger/${id}`;
    return this.http.get<Bookings[]>(url, this.httpOptions);  
  }

  getBooking(id: number): Observable<Bookings> {
    let url = `${this.bookingURL}/${id}`;
    return this.http.get<Bookings>(url, this.httpOptions);  
  }


  // Not sending back connection, so either void or Observable<Flight>
  createBooking(bookingDTO: BookingsDTO): Observable<Bookings> {
    return this.http.post<Bookings>(this.bookingURL, bookingDTO);
  }

  updateBooking(id: number, bookingDTO: BookingsDTO): Observable<Bookings> {   

    let url = `${this.bookingURL}/${id}`;
    return this.http.put<Bookings>(url, bookingDTO);
  }

  deleteBooking(id: number): Observable<Bookings> {
    console.log('id = ${id}', id)
    let url = `${this.bookingURL}/${id}`;
    return this.http.delete<Bookings>(url, this.httpOptions);
  }


  


}
