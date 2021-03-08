/** Class model the represent a server response. */
export class WebServiceResponseBase {
  /** The webservice response message. */
  public message: string;
  /** The web service succes. */
  public success: boolean;
  /** Initialize a new instance of 'WebServiceResponseBase' class.
    * @param succes The web service success.
    * @param message The web service message. */
  constructor(success: boolean, message: string) {
    this.success = success;
    this.message = message;
  }
}
