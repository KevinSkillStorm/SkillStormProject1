
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from '../booking/view/view.component';

const routes: Routes = [
  { path: 'passenger', redirectTo: 'passenger/index', pathMatch: "full" },
  { path: 'passenger/index', component: IndexComponent },
  { path: 'passenger/create', component: CreateComponent },
  { path: 'passenger/delete', component: DeleteComponent },
  { path: 'passenger/update', component: UpdateComponent },
  { path: 'booking/view/:id', component: ViewComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassengerRoutingModule { }


