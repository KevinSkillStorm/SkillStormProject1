import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IndexComponent } from './index/index.component';
// import { DeleteComponent } from './delete/delete.component';
// import { UpdateComponent } from './update/update.component';
import { BookingRoutingModule } from './booking-routing.module';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    DeleteComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BookingRoutingModule,
    HttpClientModule
  ]
})
export class BookingModule { }
