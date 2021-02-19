import { Component, OnInit } from '@angular/core';

import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators, ReactiveFormsModule} from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-authentication-view',
  templateUrl: './authentication-view.component.html',
  styleUrls: ['./authentication-view.component.css']
})
export class AuthenticationViewComponent implements OnInit {

  public emailFormControl : FormControl = new FormControl('', [ Validators.required, Validators.email ]);

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
  }

}
