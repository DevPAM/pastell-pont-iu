import { Component, OnInit, Input } from '@angular/core';

import { InputMailModel } from './../../../models/form/text/input-mail.model';

@Component({
  selector: 'app-input-mail',
  templateUrl: './input-mail.component.html',
  styleUrls: ['./input-mail.component.css']
})
export class InputMailComponent implements OnInit {
  /** The component model. */
  @Input() model: InputMailModel;
  /** Initialize a new instance of 'InputMailModel' class. */
  constructor() {
    this.model = new InputMailModel('', false, '');
  }
  /** */
  ngOnInit(): void {
  }
}
