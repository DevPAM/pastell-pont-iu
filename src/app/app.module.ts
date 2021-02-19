import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';

import {FormsModule, ReactiveFormsModule/*, FormGroupDirective, NgForm, Validators*/ } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthenticationViewComponent } from './components/authentication/authentication-view/authentication-view.component';
import { InscriptionViewComponent } from './components/authentication/inscription-view/inscription-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    AuthenticationViewComponent,
    InscriptionViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
