import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: 'flight', redirectTo: 'flight/index', pathMatch: "full"},
  {path: 'flight/index', component: IndexComponent},
  {path: 'flight/create', component: CreateComponent},
  {path: 'flight/delete', component: DeleteComponent},
  {path: 'flight/update', component: UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
