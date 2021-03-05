import { Component } from '@angular/core';

import { InputTextModel } from './../../../../models/form/text/input-text.model';
import { InputPasswordModel } from './../../../../models/form/text/input-password.model';

import { AuthenticationComponent } from './../authentication.component';

import { AuthenticationService } from './../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-authentication-view',
  templateUrl: './authentication-view.component.html',
  styleUrls: ['./authentication-view.component.css']
})
export class AuthenticationViewComponent {

  /** */
  public identifier: InputTextModel;

  /** */
  public password: InputPasswordModel;

  /** Initialize a new instance of AuthenticationViewComponent' class.
    * @param authenticationService The component service. */
  constructor(private authenticationService : AuthenticationService) {
    this.identifier = new InputTextModel('Votre identifiant', true, "");
    this.password = new InputPasswordModel('Votre mot de passe', true, "");
  }

  /** The the authentication's form. */
  private cleanForm(): void {
    this.password.value = '';
    this.identifier.value = '';
  }

  /** Go to the inscription view. */
  public goToInscription(): void {
    this.cleanForm();
    this.authenticationService.goToInscription();
  }
}
