import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../../../services/authentication/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  /** The view visible. */
  public visibleView: string;

  /** Initialize a new instance of 'AuthenticationComponent' class.
    * @param authenticationService The component service. */
  constructor(private authenticationService : AuthenticationService) {
    // Initialization.
    this.visibleView = 'CONNEXION_VIEW';
    // Set on changement.
    this.authenticationService.visibleView.subscribe(view => { this.visibleView = view });
  }

  ngOnInit(): void {

  }

}
