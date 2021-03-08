import { Component, OnInit } from '@angular/core';
import { OptionContainerModel } from './../../../models/menu/option-container.model';
// import { OptionContainerModel } from './../../../models/menu/option-container.model';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  /** */
  public model: OptionContainerModel[];
  /** */
  constructor() {
    this.model = [];
  }

  ngOnInit(): void {
    //
    var container_flux: OptionContainerModel = new OptionContainerModel('flux');
    var container_com_pub : OptionContainerModel = new OptionContainerModel('Commande publique');
    //
    container_flux.addOption(container_com_pub);
    //
    this.model.push(container_flux);
  }

}
