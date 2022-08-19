import { Component, OnInit } from '@angular/core';
import { Passenger, PassengerDTO } from 'src/app/passenger/passenger';
import { PassengerService } from 'src/app/passenger/passenger.service';
import { LiteralExpr, VariableBinding } from '@angular/compiler';

import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from 'src/app/flight/flight';
import { FlightService } from 'src/app/flight/flight.service';
import { BookingService } from 'src/app/booking/booking.service';
import { Bookings } from '../booking';
import { mergeMap } from 'rxjs/operators';
import { concat, lastValueFrom, Observable, forkJoin, of } from 'rxjs';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  bookingData!: Bookings;
  passengerData!: Passenger;
  flightData!: Observable<Flight>;
  currentPassengerid!: number;
  currentflightID!: number;


  constructor(
    private bookingService: BookingService,
    private flightService: FlightService,
    private passengerService: PassengerService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.currentPassengerid = this.route.snapshot.params['id'];

    forkJoin(
      this.passengerService.getPassenger(this.currentPassengerid),
      this.bookingService.getBookingFromPassenger(this.currentPassengerid),
    )
      .subscribe((
        [
          pData,
          bData
        ]
      ) => {
        console.log(pData);
        console.log(bData);
        console.log(bData[0]);
        this.passengerData = pData;
        // // this.flightData = data.flight;
        this.bookingData = bData[0];
        this.currentflightID = this.bookingData.flightID;

        this.flightService.getFlight(this.currentflightID).subscribe(flight => {
          this.flightData = of(flight);
        });
        
      });

  }
  getFlights(): void {
    this.flightService.getFlight(this.currentflightID).subscribe(flight => {
      this.flightData = of(flight);
    });
  }


}

