import { NgModule } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IndexComponent } from './index/index.component';
// import { DeleteComponent } from './delete/delete.component';
// import { UpdateComponent } from './update/update.component';
import { BookingRoutingModule } from './booking-routing.module';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PassengerRoutingModule } from '../passenger/passenger-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    DeleteComponent,
    DetailComponent,
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    PassengerRoutingModule,
    BookingRoutingModule,
    HttpClientModule,
    NgForOf,
    
  ]
})
export class BookingModule { }
