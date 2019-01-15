import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SettingPage');
  // }

  // loader() {
  //   let loader = this.loadingCtrl.create({
  //     content: "Patientez ...",
  //     duration: 3000
  //   });
  //   loader.present();
  // }
  goToAbout() {
    this.navCtrl.push(AboutPage);
  }

}
