import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PassengerRoutingModule } from './passenger-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { BookingRoutingModule } from '../booking/booking-routing.module';
import { ViewComponent } from '../booking/view/view.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    DeleteComponent,
    UpdateComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PassengerRoutingModule,
    BookingRoutingModule,
    HttpClientModule
  ]
})
export class PassengerModule { }
