import {  }
/** Class model the represent a server response. */
export class WebServiceResponseData<T> extends {
  /** The web service data response. */
  public data: T;
  /** Initialize a new instance of 'WebServiceResponseBase' class.
    * @param succes The web service success.
    * @param message The web service message. 
    * @param data The web service data. */
  constructor(boolean: success, message: string, data: T) {
    super(success, message);
    this.data = data;
  }
}
