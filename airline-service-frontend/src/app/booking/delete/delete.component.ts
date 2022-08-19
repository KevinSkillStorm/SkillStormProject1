import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from 'src/app/flight/flight';
import { FlightService } from 'src/app/flight/flight.service';
import { Passenger } from 'src/app/passenger/passenger';
import { PassengerService } from 'src/app/passenger/passenger.service';
import { Bookings } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public deleteBookingForm!: FormGroup;

  passengersList: Passenger[] = [];
  flightsList: Flight[] = [];
  bookingsList: Bookings[] = [];
  constructor(
    private bookingService: BookingService,
    private flightService: FlightService,
    private passengerService: PassengerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.retrieveBookings();
    // this.retrieveFlights();
    // this.retrievePassengers();
    this.deleteBookingForm = new FormGroup({
      id: new FormControl('', Validators.required),
      confirmationNumber: new FormControl('', Validators.required),
    });
  }


  retrieveBookings(): void {
    this.bookingService.getBookings().subscribe(gotBookings => this.bookingsList = gotBookings)
  }

  retrieveFlights(): void {
    this.flightService.getFlights().subscribe(gotFlights => this.flightsList = gotFlights)
  }

  retrievePassengers(): void {
    this.passengerService.getPassengers().subscribe(gotPassengers => this.passengersList = gotPassengers)
  }


  get f() { return this.deleteBookingForm.controls; }

  delete(id: number) {
    console.log("delete works");


    this.bookingService.deleteBooking(id).subscribe((res: any) => { // response object
      console.log(res);
      this.router.navigateByUrl('booking/index');

    })

  }
}

