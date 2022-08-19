import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  
  flightsList: Flight[] = [];
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.retrieveFlights();
  }

  
  retrieveFlights() : void {
    this.flightService.getFlights().subscribe(gotFlights => this.flightsList = gotFlights)
  }

}
