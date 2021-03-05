import { FormModel } from './../../../form/form.model';
import { InputTextModel } from './../../../form/text/input-text.model';
import { InputMailModel } from './../../../form/text/input-mail.model';
import { InputPasswordModel } from './../../../form/text/input-password.model';
/** Model form model class for the user inscription.  */
export class InscrtiptionFormModel implements FormModel {
  /** The user identifier. */
  public identifier: InputTextModel;
  /** The user name. */
  public name: InputTextModel;
  /** The user firstname. */
  public firstname: InputTextModel;
  /** The user firstname. */
  public mail: InputMailModel;
  /** The user password. */
  public password: InputPasswordModel;
  /** The user password confirmation. */
  public passwordConfirmation: InputPasswordModel;
  /** Initialize a new instance of 'InscrtiptionFormModel' class. */
  constructor() {
    this.identifier = new InputTextModel('Votre maticule', true, '');
    this.name = new InputTextModel('Votre nom', true, '');
    this.mail = new InputMailModel('Votre email', true, '');
    this.firstname = new InputTextModel('Votre prénom', true, '');
    this.password = new InputPasswordModel('Votre mot de passe', true, '');
    this.passwordConfirmation = new InputPasswordModel('Resaisissez votre mot de passe', true, '');
  }
  /** Checks if the form is valid.
    * @return true if the form is valid; otherwise false. */
  public isFormValid(): boolean {
    var vName: boolean = this.isInputNameValid();
    var vMail: boolean = this.isInputMailValid();
    var vPasswords : boolean = this.isPasswordsValid();
    var vFirstName: boolean = this.isInputFirstNameValid();
    var videntifier : boolean = this.isInputIdentifierValid();
    // Check if the form is valid.
    return (vName && vFirstName && vMail && vPasswords && videntifier);
  }
  /** Clean the form. */
  public cleanForm(): void {
    this.name.clean();
    this.mail.clean();
    this.password.clean();
    this.firstname.clean();
    this.identifier.clean();
    this.passwordConfirmation.clean();
  }
  /** Check if the input identifier is valid.
    * @return true ig the name input is valid; otherwise false. */
  private isInputIdentifierValid(): boolean {
    var result : boolean = this.identifier.isEmpty();
    if(result) this.identifier.setError('Veuillez saisir votre matricule svp.');
    return result;
  }
  /** Check if the input name is valid.
    * @return true ig the name input is valid; otherwise false. */
  private isInputNameValid(): boolean {
    var result : boolean = this.name.isEmpty();
    if(result) this.name.setError('Veuillez saisir votre nom svp.');
    else this.name.resetError();
    return result;
  }
  /** Check if the input first name is valid.
    * @return true if the first name input is valid; otherwise false. */
  private isInputFirstNameValid(): boolean {
    var result : boolean = this.firstname.isEmpty();
    if(result) this.firstname.setError('Veuillez saisir votre prénom svp.');
    else this.firstname.resetError();
    return result;
  }
  /** Check if the input mail is valid.
    * @return true if the mail input is valid; otherwise false. */
  private isInputMailValid(): boolean {
    var result : boolean = this.mail.isEmpty();
    console.log('mail :' + result + ' ' + this.mail.isMailValid());

    if(result) this.mail.setError('Veuillez saisir votre mot de passe svp.');
    else if(!this.mail.isMailValid()) this.mail.setError("Votre adresse mail n'est pas valide.");
    else this.mail.resetError();
    return !result;
  }
  /** Check if the input password is valid.
    * @return true if the password input is valid; otherwise false. */
  private isInputPasswordValid(): boolean {
    var result : boolean = this.password.isEmpty();
    if(result) this.password.setError('Veuillez saisir votre mot de passe svp.');
    else this.password.resetError();
    return !result;
  }
  /** Check if the input first name is valid.
    * @return true if the first name input is valid; otherwise false. */
  private isInputConfirmationPasswordValid(): boolean {
    var result : boolean = this.passwordConfirmation.isEmpty();
    if(result) this.passwordConfirmation.setError('Veuillez saisir votre mot de passe svp.');
    else this.passwordConfirmation.resetError();
    return !result;
  }
  /** Check the passwords input.
    * return true if the passwords are valide; otherelse false.*/
  private isPasswordsValid(): boolean {
    var p1: boolean = this.isInputPasswordValid();
    var p2: boolean = this.isInputConfirmationPasswordValid();
    //console.log(p1 + ' ' + p2);
    if(!p1 || !p2) return false;
    if(this.password.value != this.passwordConfirmation.value) {
      this.passwordConfirmation.setError("Veuillez saisir le même mot de passe svp.");
      return false;
    }
    return true;
  }
}
