/** */
export class OptionModel {
  /** */
  public name: string;

  /** */
  public type: string;

  /** */
  public isSelected: boolean;

  /** */
  public cssClass: string;

  /**
    * @param name
    * @param type */
  constructor(name: string, type: string) {
    this.type = type;
    this.name = name;
    this.isSelected = false;
    this.cssClass = "sub_"+name.replace(/\s+/g, "_");
  }

  /** */
  switch(){
    this.isSelected = !this.isSelected;
    console.log(this.isSelected);

  }
}
