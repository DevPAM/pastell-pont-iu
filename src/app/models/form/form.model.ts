import { InputModel } from './input.model';
/** Model class for a form. */
export interface FormModel {
  /** Checks if the form is valid.
    * @return true if the form is valid; otherwise false. */
  isFormValid(): boolean;
}
