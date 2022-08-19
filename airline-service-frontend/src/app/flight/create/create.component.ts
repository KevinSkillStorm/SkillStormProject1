import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlightService } from '../flight.service';
import { BookingService } from 'src/app/booking/booking.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public newFlightForm!: FormGroup
  public newBookingForm!: FormGroup
  

  flightsList: Flight[] = [];

  lastID:any = this.flightsList[this.flightsList.length-1];

  constructor(
    private bookingService: BookingService,
    private flightService: FlightService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.retrieveFlights();
    this.newFlightForm = new FormGroup({
      flightNumber: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required),
      departureDateTime: new FormControl('', Validators.required),
      arrivalDateTime: new FormControl('', Validators.required),
      departureAirport: new FormControl('', Validators.required),
      arrivalAirport: new FormControl('', Validators.required),
      maxCapacity: new FormControl('', Validators.required),
    });
  }

  get f() { return this.newFlightForm.controls; }

  retrieveFlights() : void {
    this.flightService.getFlights().subscribe(gotFlights => this.flightsList = gotFlights)
  }



  submit() {
    this.flightService.createFlight(this.newFlightForm.value).subscribe((res: any) => { // response object
      console.log(res);      
      // this.router.navigateByUrl('passenger/create/lastID');
      this.router.navigateByUrl('flight/index');
    });
  }


  
}
