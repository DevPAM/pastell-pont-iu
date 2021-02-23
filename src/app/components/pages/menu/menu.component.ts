import { Component, OnInit } from '@angular/core';

import { OptionModel } from './../../../models/menu/option.model';
import { SubOptionModel } from './../../../models/menu/sub-option.model';
import { OptionLinkModel } from './../../../models/menu/option-link.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public options : OptionModel[];

  constructor() {
  }

  ngOnInit(): void {
    this.options = [];

    var flux = new SubOptionModel("flux");
    var commande_publique = new SubOptionModel("commande publique");
    var piece_signee = new OptionLinkModel("Pièce signée", "/documents/piece-signee");

    commande_publique.addOption(piece_signee);
    flux.addOption(commande_publique);

    this.options.push(flux);
  }

}
