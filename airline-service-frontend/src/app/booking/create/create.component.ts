import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookingService } from '../booking.service';
import { Flight } from 'src/app/flight/flight';
import { FlightService } from 'src/app/flight/flight.service';
import { Passenger } from 'src/app/passenger/passenger';
import { PassengerService } from 'src/app/passenger/passenger.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public newBookingForm!: FormGroup

  passengersList: Passenger[] = [];
  flightsList: Flight[] = [];
  constructor(
    private passengerService: PassengerService,
    private flightService: FlightService,
    private bookingService: BookingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newBookingForm = new FormGroup({
      confirmationNumber: new FormControl('', Validators.required),
      passengerID: new FormControl('', Validators.required),
      flightID: new FormControl('', Validators.required),

    });
    this.retrieveFlights();
    this.retrievePassengers();
  }


  retrieveFlights(): void {
    this.flightService.getFlights().subscribe(gotFlights => this.flightsList = gotFlights)
  }

  retrievePassengers(): void {
    this.passengerService.getPassengers().subscribe(gotPassengers => this.passengersList = gotPassengers)
  }

  get f() { return this.newBookingForm.controls; }

  submit() {
    console.log("submitted for booking");
    this.bookingService.createBooking(this.newBookingForm.value).subscribe((res: any) => { // response object
      console.log(res);
      this.router.navigateByUrl('passenger/index');
    });
  }

}
