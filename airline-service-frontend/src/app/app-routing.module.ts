import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './passenger/index/index.component';

const routes: Routes = [
  {path: '', redirectTo: 'passenger', pathMatch: "full"},
  {path: 'passenger', component: IndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
