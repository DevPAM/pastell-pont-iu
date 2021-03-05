import { Component, OnInit, Input } from '@angular/core';

import { InputPasswordModel } from './../../../models/form/text/input-password.model';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css']
})
export class InputPasswordComponent implements OnInit {
  /** The component model. */
  @Input() model: InputPasswordModel;
  /** Initialize a new instance of 'InputPasswordComponent'. */
  constructor() {
    this.model = new InputPasswordModel('', false, '');
  }
  /** */
  ngOnInit(): void {
  }
}
