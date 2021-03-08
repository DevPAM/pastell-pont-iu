import { FormModel } from './../../../form/form.model';
import { LoaderModel } from './../../../loader/loader.model';
import { InputTextModel } from './../../../form/text/input-text.model';
import { LoaderStateEnumModel } from './../../../loader/loader-enum.model';
import { InputPasswordModel } from './../../../form/text/input-password.model';
/** Class model for the user atuhentication. */
export class AuthenticationFormModel implements FormModel {
  /** The loader state. */
  public loader: LoaderModel;
  /** The user identifier. */
  public identifier: InputTextModel;
  /** The user password. */
  public password: InputPasswordModel;
  /** Initialize a new instance of 'AuthenticationFormModel' class. */
  constructor() {
    this.loader = new LoaderModel(LoaderStateEnumModel.INVISIBLE);
    this.identifier = new InputTextModel('Votre identifiant', true, '');
    this.password = new InputPasswordModel('Votre mot de passe', true, '');
  }
  /** Indicates that the form in under work. */
  public workOn(): void {
    this.loader.setState(LoaderStateEnumModel.VISIBLE);
  }
  /** Indicates that the form is not under work. */
  public notWorkOn(): void {
    this.loader.setState(LoaderStateEnumModel.INVISIBLE);
  }
  /** Clean the form. */
  public cleanForm(): void {
    this.password.clean();
    this.identifier.clean();
  }
  /** Checks if the form is valid.
    * @return true if the form is valid; otherwise false. */
  public isFormValid(): boolean {
    var vPassword : boolean = this.isInputPasswordValid();
    var videntifier : boolean = this.isInputIdentifierValid();
    // Check if the form is valid.
    console.log('PASSWORD : '+vPassword);
    console.log('IDENTIFIER : '+videntifier);
    return (vPassword && videntifier);
  }
  /** Check if the input password is valid.
    * @return true if the password input is valid; otherwise false. */
  private isInputPasswordValid(): boolean {
    var result : boolean = this.password.isEmpty();
    if(result) this.password.setError('Veuillez saisir votre mot de passe svp.');
    else this.password.resetError();
    //
    // console.log( !result + ' est mot de passe valide ?' );
    return !result;
  }
  /** Check if the input identifier is valid.
    * @return true ig the name input is valid; otherwise false. */
  private isInputIdentifierValid(): boolean {
    var result : boolean = this.identifier.isEmpty();
    if(result) this.identifier.setError('Veuillez saisir votre matricule svp.');
    else this.identifier.resetError();
    //
    // console.log( !result + ' est identifiant valide ?' );
    return !result;
  }
}
