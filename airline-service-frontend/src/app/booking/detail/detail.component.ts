import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from 'src/app/flight/flight';
import { FlightService } from 'src/app/flight/flight.service';
import { PassengerService } from 'src/app/passenger/passenger.service';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id!: number;
  flightData!: Flight;

  constructor(
    private bookingService: BookingService,
    private flightService: FlightService,
    private passengerService: PassengerService,
    private router: Router,
    private route: ActivatedRoute,
  ) {  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.retrieveFlight(this.id);
  }

  
  retrieveFlight(flightId: number){
    this.flightService.getFlight(flightId).subscribe(gotFlights => this.flightData = gotFlights);
  }
  

}
