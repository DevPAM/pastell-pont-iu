import { Component, Input, OnInit } from '@angular/core';
import { LoaderModel } from './../../../models/loader/loader.model';
import { LoaderStateEnumModel } from './../../../models/loader/loader-enum.model';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  /** The component model. */
  @Input() model: LoaderModel;
  /** Initialize a new instance of 'LoaderModel' class. */
  constructor() {
    this.model = new LoaderModel(LoaderStateEnumModel.INVISIBLE);
  }
  /** Indicate if the loader is visible or not.
    * @return true if the loader is visible, false otherelse. */
  isVisible(): boolean {
    return this.model.state == LoaderStateEnumModel.VISIBLE;
  }
  /** */
  ngOnInit(): void {
  }
}
