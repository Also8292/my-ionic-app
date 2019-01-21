import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-projet',
  templateUrl: 'projet.html',
})
export class ProjetPage {

  id: any;
  title: any;
  description: any;
  duree: any;
  image: any;
  image_url: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = navParams.get("id");
    this.title = navParams.get("title");
    this.description = navParams.get("description");
    this.duree = navParams.get("duree");
    this.image = navParams.get("image");
    this.image_url = navParams.get('image_url');
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ProjetPage');
  // }

}
