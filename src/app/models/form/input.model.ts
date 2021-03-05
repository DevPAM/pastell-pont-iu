/** Model class for a model input. */
export class InputModel<T> {
  /** Indicate if the input is in error. */
  public inError: boolean;
  /** The message of the input. */
  public message: string;
  /** The input value. */
  public value: T;
  /** The input placeholder. */
  public placeholder: string;
  /** Indicates whether the input is mandatory or not. */
  public isMandatory: boolean;
  /** Initialize a new instance of 'InputModel'.
    * @param placeholder The input placeholder.
    * @param isMandatory Indicates if the input is mandatory or not.
    * @param value The input value. */
  constructor(placeholder: string, isMandatory: boolean, value: T) {
    this.message = '';
    this.value = value;
    this.inError = false;
    this.isMandatory = isMandatory;
    this.placeholder = placeholder+(this.isMandatory ? '*' : '');
  }
  /** Set the input to error.
    * @param message The error message. */
  public setError(message: string): void {
    this.inError = true;
    this.message = message;
  }
  /** Reset the input error.  */
  public resetError(): void {
    this.message = '';
    this.inError = false;
  }
}
