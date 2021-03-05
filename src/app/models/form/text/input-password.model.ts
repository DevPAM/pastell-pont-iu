import { InputTextModel } from "./input-text.model";
/** Model class for an input text type password. */
export class InputPasswordModel extends InputTextModel {
  /** Indicates if the password is visible or not. */
  public isPasswordVisible: boolean;
  /** Initialize a new instance of 'InputPasswordModel' class.
  * @param placeholder The input placeholder value.
  * @param isMandatory Indicates if the input is mandatory or not.
  * @param value The input value. */
  constructor(placeholder: string, isMandatory: boolean, value: string) {
    super(placeholder, isMandatory, value);
    this.isPasswordVisible = false;
  }
  /** Switches the password visibility. */
  public switchPasswordVisibility(): void  {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
