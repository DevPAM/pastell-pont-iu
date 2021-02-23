import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './components/pages/pages.component';
import { ListDocumentsComponent } from './components/pages/list-documents/list-documents.component';
// import { AuthenticationComponent } from './components/authentication/authentication.component';


const routes: Routes = [
  { path : 'index', component: PagesComponent },
  { path : '', redirectTo: '/index', pathMatch: 'full' },
  { path : 'documents/:id', component: ListDocumentsComponent },
  // { path : 'authentication', component: AuthenticationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
