import { LoaderStateEnumModel } from './loader-enum.model';
/** Model class for a loader. */
export class LoaderModel {
  /** The laoder state. */
  public state: LoaderStateEnumModel;
  /** INitialize a new instance of 'LoaderModel' class.
    * @param initialState The inital state. */
  constructor(initialState: LoaderStateEnumModel) {
    this.state = initialState;
  }
  /** Set the loader state.
    * @param state The new loader state. */
  setState(state: LoaderStateEnumModel): void {
    this.state = state;
  }
}
