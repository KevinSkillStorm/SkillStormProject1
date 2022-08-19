import { Component, OnInit } from '@angular/core';
import { Passenger, PassengerDTO } from '../passenger';
import { PassengerService } from '../passenger.service';
import { BookingService } from 'src/app/booking/booking.service';
import { LiteralExpr, VariableBinding } from '@angular/compiler';
import { Bookings } from '../passenger';
import { Router } from '@angular/router';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  passengersList: Passenger[] = [];
  bookingList: Bookings[] = [];

  idOfPassenger: number = 1;


  constructor(
    private passengerService: PassengerService,
    private bookingService: BookingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.retrievePassengers();
    // this.retrieveBookings();
  }
  retrievePassengers(): void {
    this.passengerService.getPassengers().subscribe(gotPassengers => this.passengersList = gotPassengers)
  }


  retrieveBookings(): void {
    this.bookingService.getBookings().subscribe(gotBooking => this.bookingList = gotBooking)
  }


}


  // // TODO:  Modify passenger Delete function so that if checks to see if what we inputed was the correct flightNumber and id
  // delete(id: number, name: string) {
  //   console.log("delete works");


  //   this.passengerService.deletePassenger(id).subscribe((res: any) => { // response object
  //     console.log(res);
  //     this.router.navigateByUrl('passenger/index');

  //   })

  // }