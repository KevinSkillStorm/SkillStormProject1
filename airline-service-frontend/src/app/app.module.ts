import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightModule } from './flight/flight.module';
import { PassengerModule } from './passenger/passenger.module';
import { BookingModule } from './booking/booking.module';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlightModule,
    PassengerModule,
    BookingModule,
    CommonModule,
    NgForOf,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
