import { Component, Input, OnInit } from '@angular/core';

import { OptionModel } from './../../../../models/menu/option.model';
import { SubOptionModel } from './../../../../models/menu/sub-option.model';
import { OptionLinkModel } from './../../../../models/menu/option-link.model';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  /** */
  @Input() option: OptionModel;

  /** */
  constructor() { }

  /** */
  ngOnInit(): void {
  }

}
