import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { WebServiceResponseBase } from './../../models/api/return/ws-response-base.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  /** */
  private visibleViewSource : Subject<string>;
  /** */
  public visibleView: Observable<string>;
  /** Initialize a new instance of 'AuthenticationService' class. */
  constructor() {
    this.visibleViewSource = new Subject<string>();
    this.visibleView = this.visibleViewSource.asObservable();
  }
  /** Go to the inscription view. */
  public goToInscription() : void {
    this.visibleViewSource.next('INSCRIPTION_VIEW');
  }
  /** Go tot the connexion view. */
  public gotToConnexion() : void {
    return this.visibleViewSource.next('CONNEXION_VIEW');
  }
  /**
    * @param identifier
    * @param name
    * @param firstname
    * @param mail
    * @param password
    * @return */
  public signIn(identifier: string, name: string, firstname: string, mail: string, password: string): Observable<WebServiceResponseBase> {
    var result : WebServiceResponseBase = new WebServiceResponseBase(true, "ok");
    return of(result);
  }
  /**
    * @param identifier
    * @param password
    * @return */
  public authenticate(identifier: string, password: string): Observable<WebServiceResponseBase> {    
    console.log('service authenticate '+identifier+ ' '+ password);
    var result : WebServiceResponseBase = new WebServiceResponseBase(true, "ok");
    return of(result);
  }
}
