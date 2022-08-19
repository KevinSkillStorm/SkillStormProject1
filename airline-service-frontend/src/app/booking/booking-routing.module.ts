import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
// import { DeleteComponent } from './delete/delete.component';
// import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: 'booking', redirectTo: 'booking/index', pathMatch: "full"},
  {path: 'booking/index', component: IndexComponent},
  {path: 'booking/create', component: CreateComponent},
  {path: 'booking/view', component: ViewComponent},
  // {path: 'booking/delete', component: DeleteComponent},
  // {path: 'booking/update', component: UpdateComponent}
  {path: 'booking/view', component: ViewComponent},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
