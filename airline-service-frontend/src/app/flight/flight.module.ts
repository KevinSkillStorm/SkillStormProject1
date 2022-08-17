import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FlightRoutingModule } from './flight-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlightRoutingModule
  ]
})
export class FlightModule { }
