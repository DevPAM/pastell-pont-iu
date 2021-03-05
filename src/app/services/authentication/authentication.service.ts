import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

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

  public signIn(identifier: string, name: string, firstname: string, mail: string, password: string): void {

  }
}
