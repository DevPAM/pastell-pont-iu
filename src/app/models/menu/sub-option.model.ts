import { OptionModel } from './option.model'

/** */
export class SubOptionModel extends OptionModel {
  /** */
  public options: OptionModel[];

  /**
    * @param name */
  constructor(name: string) {
    super(name, "SUB-OPTION");
    this.options = [];
  }

  /**
    * @param option */
  addOption(option: OptionModel) {
    this.options.push(option);
  }
}
