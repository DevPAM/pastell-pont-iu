import { InputTextModel } from "./input-text.model";
/** Model class for ipnut text type mail. */
export class InputMailModel extends InputTextModel {
  /** Initialize a new instance of 'InputMailModel' class.
    * @param placeholder The input placeholder value.
    * @param isMandatory Indicates if the input is mandatory or not.
    * @param value The input value. */
  constructor(placeholder: string, isMandatory: boolean, value: string) {
    super(placeholder, isMandatory, value);
  }
  /** Check if the e-mail is valid.
    * @return true if the mail is valid; otherwise false. */
  public isMailValid(): boolean {    
    // Check if mail is empty.
    if(this.isEmpty()) return false;
    // Check the mail validity.
    let regex : RegExp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    return regex.test(this.value);
  }
}
