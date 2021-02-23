import { OptionModel } from './option.model'

/** */
export class OptionLinkModel extends OptionModel {
  /** */
  public link : string;

  /**
    * @param name
    * @param link */
  constructor(name: string, link: string) {
    super(name, "LINK");
    this.link = link;
  }
}
