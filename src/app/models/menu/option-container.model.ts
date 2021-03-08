import { OptionModel } from './option.model';
import { OptionEnum } from './option-type-enum.model';
/** */
export class OptionContainerModel extends OptionModel {
  /** */
  public options: OptionModel[];
  /** */
  public type: string;
  /** */
  constructor(name: string) {
    super(name);
    this.options = [];
    this.type = OptionEnum.CONTAINER ;
  }
  /** Add an option.
    * @param option The option. */
  public addOption(option: OptionModel): void {
    this.options.push(option);
  }
}
