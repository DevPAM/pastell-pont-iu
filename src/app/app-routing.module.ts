import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PageBaseComponent } from './components/pages/page-base/page-base.component';
import { AuthenticationComponent } from './components/pages/authentication/authentication.component';

const routes: Routes = [
  { path: 'home', component: PageBaseComponent },
  { path : '', redirectTo: '/authentication', pathMatch: 'full' },
  { path : 'authentication', component: AuthenticationComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
