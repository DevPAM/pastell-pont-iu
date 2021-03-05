import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './components/pages/authentication/authentication.component';

const routes: Routes = [
  { path : '', redirectTo: '/authentication', pathMatch: 'full' },
  { path : 'authentication', component: AuthenticationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
