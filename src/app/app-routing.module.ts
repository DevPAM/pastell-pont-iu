import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './components/authentication/authentication.component';

const routes: Routes = [
  { path : 'authentication', component: AuthenticationComponent },
  { path : '', redirectTo: '/authentication', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
