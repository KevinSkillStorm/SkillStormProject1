import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, of } from 'rxjs';

import { Passenger, PassengerDTO } from './passenger';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private passengerURL = environment.passengerUrl;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) { }
  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(this.passengerURL, this.httpOptions);
  }
  getPassenger(id: number): Observable<Passenger> {
    let url = `${this.passengerURL}/${id}`;
    return this.http.get<Passenger>(url, this.httpOptions);
  }

  // Not sending back connection, so either void or Observable<Flight>
  createPassenger(passengerDTO: PassengerDTO): Observable<Passenger> {
    return this.http.post<Passenger>(this.passengerURL, passengerDTO);
  }

  updatePassenger(id: number, passengerDTO: PassengerDTO): Observable<Passenger> {

    let url = `${this.passengerURL}/${id}`;
    return this.http.put<Passenger>(url, passengerDTO);
  }

  deletePassenger(id: number): Observable<Passenger> {
    console.log('id = ${id}', id)
    let url = `${this.passengerURL}/${id}`;
    return this.http.delete<Passenger>(url, this.httpOptions);
  }


}
