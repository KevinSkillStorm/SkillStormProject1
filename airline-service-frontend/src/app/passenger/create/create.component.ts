import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PassengerService } from '../passenger.service';
import { Passenger } from '../passenger';
import { BookingService } from 'src/app/booking/booking.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public newPassengerForm!: FormGroup;
  public confirmationForm!: FormGroup;
  
  passengersList: Passenger[] = [];

  passengerLastID:any = this.passengersList[this.passengersList.length-1];
  flightLastID: any;

  constructor(
    private bookingService: BookingService,
    private passengerService: PassengerService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.flightLastID = this.route.snapshot.params['id'];
    this.newPassengerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
    });

    this.confirmationForm = new FormGroup({
      confirmationForm: new FormControl('', Validators.required),
    });
  }
  get f() { return this.newPassengerForm.controls; }

  submit() {    
    this.passengerService.createPassenger(this.newPassengerForm.value).subscribe((res: any) => { // response object    
      this.router.navigateByUrl('passenger/index');
    });
    
   
  }

}
