import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PassengerService } from '../passenger.service';
import { Passenger, PassengerDTO } from '../passenger';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  public deletePassengerForm!: FormGroup;

  passengersList: Passenger[] = [];

  constructor(
    private passengerService: PassengerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.retrievePassengers();

    this.deletePassengerForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required)
    });
  }


  retrievePassengers(): void {
    this.passengerService.getPassengers().subscribe(gotPassengers => this.passengersList = gotPassengers)
  }

  get f() { return this.deletePassengerForm.controls; }


  // TODO:  Modify passenger Delete function so that if checks to see if what we inputed was the correct flightNumber and id
  delete(id: number, name: string) {
    console.log("delete works");


    this.passengerService.deletePassenger(id).subscribe((res: any) => { // response object
      console.log(res);
      this.router.navigateByUrl('passenger/index');

    })

  }
}

