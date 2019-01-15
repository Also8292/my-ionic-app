import { ProjetPage } from './projet/projet';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-projets',
  templateUrl: 'projets.html',
})
export class ProjetsPage {
  title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = "Projets";
  }

  goToProject() {
    this.navCtrl.push(ProjetPage);
  }

}
