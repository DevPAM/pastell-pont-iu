import {Router} from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { InputTextModel } from './../../../../models/form/text/input-text.model';
import { InputMailModel } from './../../../../models/form/text/input-mail.model';
import { InputPasswordModel } from './../../../../models/form/text/input-password.model';

import { InscrtiptionFormModel } from './../../../../models/api/form/user/inscription-form.model';

import { AuthenticationService } from './../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-inscription-view',
  templateUrl: './inscription-view.component.html',
  styleUrls: ['./inscription-view.component.css']
})
export class InscriptionViewComponent {
  /** The component form. */
  public model: InscrtiptionFormModel;
  /** Initialize a new instance of 'InscriptionViewComponent' class.
    * @param authenticationService The component service. */
  constructor(private authenticationService : AuthenticationService, private router: Router) {
    this.model = new InscrtiptionFormModel();
  }
  /** The the authentication's form. */
  private cleanForm(): void {
    this.model.cleanForm();
  }
  /** Go to the connexion view. */
  public goToConnexion(): void {
    this.model.cleanForm();
    this.model.notWorkOn();
    this.authenticationService.gotToConnexion();
  }
  /** Send the form to the server. */
  public signIn(): void {
    this.model.workOn();
    if(!this.model.isFormValid()) {
      this.model.notWorkOn();
      return;
    }
    // Try to sign in to the API.
    this.authenticationService.signIn(this.model.identifier.value, this.model.name.value, this.model.firstname.value, this.model.mail.value, this.model.password.value)
    .subscribe(response => { console.log(response); if(response.success) { return; } else { return; } } );
  }
}
