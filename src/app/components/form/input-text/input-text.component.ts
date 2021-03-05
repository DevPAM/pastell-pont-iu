import { Component, OnInit, Input } from '@angular/core';

import { InputTextModel } from './../../../models/form/text/input-text.model';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  /** The component model. */
  @Input() model: InputTextModel;
  /** Initialize a new instance of 'InputTextComponent' class. */
  constructor() {
    this.model = new InputTextModel('', false, '');
  }
  /** */
  ngOnInit(): void {
  }
}
