import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../auth.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path : "user/dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  {path : "user/profile", component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
