import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, of } from 'rxjs';

import { Flight, FlightDTO } from './flight';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private flightURL = environment.flightUrl;
  //private flightURL = 'api/Flights';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  


  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.flightURL, this.httpOptions);   
  }
  
  getFlight(id: number): Observable<Flight> {
    let url = `${this.flightURL}/${id}`;
    return this.http.get<Flight>(url, this.httpOptions);  
  }

  getMultipleFlight(id: number): Observable<Flight[]> {
    let url = `${this.flightURL}/${id}`;
    return this.http.get<Flight[]>(url, this.httpOptions);  
  }

  getFlightFromBooking(id: number): Observable<Flight[]> {
    let url = `${this.flightURL}/${id}`;
    return this.http.get<Flight[]>(url, this.httpOptions);  
  }

  // Not sending back connection, so either void or Observable<Flight>
  createFlight(flightDTO: FlightDTO): Observable<Flight> {
    return this.http.post<Flight>(this.flightURL, flightDTO);
  }

  updateFlight(id: number, flightDTO: FlightDTO): Observable<Flight> {   

    let url = `${this.flightURL}/${id}`;
    return this.http.put<Flight>(url, flightDTO);
  }

  deleteFlight(id: number): Observable<Flight> {
    console.log('id = ${id}', id)
    let url = `${this.flightURL}/${id}`;
    return this.http.delete<Flight>(url, this.httpOptions);
  }




  // errorHandler(error: any, caught: Observable<Song[]>) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //     return throwError(() => new Error(errorMessage));
  //   }
  // }
}