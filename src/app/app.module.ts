import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './components/pages/authentication/authentication.component';
import { AuthenticationViewComponent } from './components/pages/authentication/authentication-view/authentication-view.component';
import { InscriptionViewComponent } from './components/pages/authentication/inscription-view/inscription-view.component';
import { InputTextComponent } from './components/form/input-text/input-text.component';
import { InputPasswordComponent } from './components/form/input-password/input-password.component';
import { InputMailComponent } from './components/form/input-mail/input-mail.component';
import { LoaderComponent } from './components/pages/loader/loader.component';
import { PageBaseComponent } from './components/pages/page-base/page-base.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { MenuComponent } from './components/pages/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    AuthenticationViewComponent,
    InscriptionViewComponent,
    InputTextComponent,
    InputPasswordComponent,
    InputMailComponent,
    LoaderComponent,
    PageBaseComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
