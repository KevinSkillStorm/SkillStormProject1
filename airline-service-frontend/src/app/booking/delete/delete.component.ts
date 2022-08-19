import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bookings } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public deleteBookingForm!: FormGroup;

  bookingsList: Bookings[] = [];
  constructor(
    private bookingService: BookingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.retrieveFlights();

    this.deleteBookingForm = new FormGroup({
      id: new FormControl('', Validators.required),
      confirmationNumber: new FormControl('', Validators.required),
    });
  }

  retrieveFlights(): void {
    this.bookingService.getBookings().subscribe(gotBookings => this.bookingsList = gotBookings)
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

