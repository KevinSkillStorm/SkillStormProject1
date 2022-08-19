import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Passenger, PassengerDTO } from '../passenger';
import { PassengerService } from '../passenger.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public updateForm!: FormGroup;

  passengersList: Passenger[] = [];
  constructor(
    private passengerService: PassengerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.retrievePassengers();
    this.updateForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),

    });
  }

  retrievePassengers(): void {
    this.passengerService.getPassengers().subscribe(gotPassengers => this.passengersList = gotPassengers)
  }

  get f() { return this.updateForm.controls; }

  update(id: number) {

    console.log("update was passed");
    this.passengerService.updatePassenger(id, this.updateForm.value).subscribe((res: any) => { // response object
      console.log(res);
      this.router.navigateByUrl('passenger/index');
    })
  }

}
// <td>{{ eachPassenger.id }}</td>
// <td>{{ eachPassenger.name }}</td>
// <td>{{ eachPassenger.job }}</td>
// <td>{{ eachPassenger.email }}</td>
// <td>{{ eachPassenger.age }}</td>                           
// <td>{{ eachPassenger.confirmationNumber }}</td>   