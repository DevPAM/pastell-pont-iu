import {Router} from '@angular/router';
import { Component } from '@angular/core';

/*import { InputTextModel } from './../../../../models/form/text/input-text.model';
import { InputPasswordModel } from './../../../../models/form/text/input-password.model';*/
import { AuthenticationFormModel } from './../../../../models/api/form/user/authentication-form.model';

import { AuthenticationComponent } from './../authentication.component';
import { AuthenticationService } from './../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-authentication-view',
  templateUrl: './authentication-view.component.html',
  styleUrls: ['./authentication-view.component.css']
})
export class AuthenticationViewComponent {
  /** The form model. */
  public model: AuthenticationFormModel;
  /** Initialize a new instance of AuthenticationViewComponent' class.
    * @param authenticationService The component service. */
  constructor(private authenticationService : AuthenticationService, private router: Router) {
    this.model = new AuthenticationFormModel();
  }
  /** The the authentication's form. */
  private cleanForm(): void {
    this.model.cleanForm();
  }
  /** Go to the inscription view. */
  public goToInscription(): void {
    this.cleanForm();
    this.authenticationService.goToInscription();
  }
  /** Authenticate a use to the API. */
  public authenticate(): void {
    this.model.workOn();
    // Check if the form is valid.
    //console.log("form valid ? "+this.model.isFormValid());
    if(!this.model.isFormValid()) {
      // console.log("is not valid");
      this.model.notWorkOn();
      return;
    }
    // console.log("is valid");
    // Try to get the
    this.authenticationService.authenticate(this.model.identifier.value, this.model.password.value)
    .subscribe(response => {
      console.log(response);
      if(response.success)  this.router.navigateByUrl("/home");
      else return;
    });
  }
}
