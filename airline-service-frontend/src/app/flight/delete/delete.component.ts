import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlightService } from '../flight.service';
import { Flight } from '../flight';
import { BasicGroupByOptions } from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public deleteFlightForm!: FormGroup;

  // Retrieving information
  flightsList: Flight[] = [];
  constructor(
    private flightService: FlightService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.retrieveFlights();

    this.deleteFlightForm = new FormGroup({
      id: new FormControl('', Validators.required),
      flightNumber: new FormControl('', Validators.required),
    });
  }


  retrieveFlights(): void {
    this.flightService.getFlights().subscribe(gotFlights => this.flightsList = gotFlights)
  }


  get f() { return this.deleteFlightForm.controls; }


  // TODO:  Modify flight Delete function so that if checks to see if what we inputed was the correct flightNumber and id
  delete(id: number, flightNumber: string) {
    console.log("delete works");


    //   for (let element of this.flightsList) {
    //     console.log(element.flightNumber);
    //     console.log(flightNumber);
    //     console.log(element.flightNumber == flightNumber);
    //     console.log("-----");
    //     if (element.id == id && element.flightNumber == flightNumber){
    //       // console.log("For each if statement is true");
    //       this.flightService.deleteFlight(id).subscribe((res: any) => { // response object
    //         console.log(res);
    //         this.router.navigateByUrl('flight/index');
    //       });
    //     } else {
    //       alert("\"Id\" or \"Flight Number\" do not match with any flights");
    //       break;
    //     }
    //  }

    this.flightService.deleteFlight(id).subscribe((res: any) => { // response object
      console.log(res);
      this.router.navigateByUrl('flight/index');

    })

  }
}







//   get f() { return this.newFlightForm.controls; }

//   submit() {
//     this.flightService.createFlight(this.newFlightForm.value).subscribe((res: any) => { // response object
//       console.log(res);
//       this.router.navigateByUrl('flight/index');
//     });
//   }

// }
