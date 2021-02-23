import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';

import {FormsModule, ReactiveFormsModule/*, FormGroupDirective, NgForm, Validators*/ } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthenticationViewComponent } from './components/authentication/authentication-view/authentication-view.component';
import { InscriptionViewComponent } from './components/authentication/inscription-view/inscription-view.component';
import { PagesComponent } from './components/pages/pages.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { ListDocumentsComponent } from './components/pages/list-documents/list-documents.component';
import { HomeComponent } from './components/pages/home/home.component';
import { OptionComponent } from './components/pages/menu/option/option.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    AuthenticationViewComponent,
    InscriptionViewComponent,
    PagesComponent,
    MenuComponent,
    ListDocumentsComponent,
    HomeComponent,
    OptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
