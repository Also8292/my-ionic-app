import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = "A propos";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
