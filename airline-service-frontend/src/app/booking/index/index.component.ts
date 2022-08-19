import { Component, OnInit } from '@angular/core';
import { Bookings } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  bookingsList: Bookings[] = [];

  constructor(private bookingService: BookingService) { }
  ngOnInit(): void {
    this.retrieveBookings();
  }


  retrieveBookings(): void {
    this.bookingService.getBookings().subscribe(gotBookings => this.bookingsList = gotBookings)
  }

}
