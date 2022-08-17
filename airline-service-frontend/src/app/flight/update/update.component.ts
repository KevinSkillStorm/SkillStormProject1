import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Flight, FlightDTO } from '../flight';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public updateForm! : FormGroup;


// Retrieving information
flightsList: Flight[] = [];
constructor(
  private flightService: FlightService,
  private router: Router
) { }

  ngOnInit(): void {
    this.retrieveFlights();
    this.updateForm = new FormGroup({
      id: new FormControl('', Validators.required),
      flightNumber: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required),
      departureDateTime: new FormControl('', Validators.required),
      arrivalDateTime: new FormControl('', Validators.required),
      departureAirport: new FormControl('', Validators.required),
      arrivalAirport: new FormControl('', Validators.required),
      maxCapacity: new FormControl('', Validators.required),
    })
  }

  retrieveFlights() : void {
    this.flightService.getFlights().subscribe(gotFlights => this.flightsList = gotFlights)
  }

  get f() { return this.updateForm.controls; }

  update(id: number){

    console.log("update was passsed");
    this.flightService.updateFlight(id, this.updateForm.value).subscribe((res: any) => { // response object
      console.log(res);
      this.router.navigateByUrl('flight/index');
    })
  }
}
