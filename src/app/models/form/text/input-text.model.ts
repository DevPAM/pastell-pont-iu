import { InputModel } from './../input.model';
/** Model class for an input type 'text'. */
export class InputTextModel extends InputModel<string> {
  /** Indicates if the input has the focus. */
  public hasFocus: boolean;
  /** Indicates if the placeholder is up or down. */
  public placeholderIsUp: boolean;
  /** Initialize a new instance of 'InputTextModel' class.
    * @param placeholder The input placeholder value.
    * @param isMandatory Indicates if the input is mandatory or not.
    * @param value The input value. */
  constructor(placeholder: string, isMandatory: boolean, value: string) {
    // Set the super class.
    super(placeholder, isMandatory, value);
    // Set the class parameters.
    this.hasFocus = false;
    this.placeholderIsUp = false;
    // Set the placeholder position.
    this.setPlaceholderPosition();
  }
  /** Give the focus to the input. */
  public onFocus(): void {
    this.hasFocus = true;
    this.setPlaceholderPosition();
  }
  /** Retrive the foxus to the input. */
  public onFocusOut(): void {
    this.hasFocus = false;
    this.setPlaceholderPosition();
  }
  /** Clean the input. */
  public clean(): void {
    this.value = '';
    this.resetError();
    this.setPlaceholderPosition();
  }
  /** Checks if the input is null or empty.
    * @return true if it's empty or null; otherwise false;  */
  public isEmpty(){
    return (this.value == null || this.value.trim() == '');
  }
  /** Move the position of the placeholder according the ipnut datas. */
  private setPlaceholderPosition(): void {
    if(this.hasFocus || (this.value != null && this.value.trim() != ''))  this.placeholderIsUp = true;
    else this.placeholderIsUp = false;
  }
}
