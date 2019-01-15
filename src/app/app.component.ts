import { AboutPage } from './../pages/about/about';
import { BlogPage } from './../pages/blog/blog';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


import { HomePage } from '../pages/home/home';
import { ProjetsPage } from './../pages/projets/projets';

/**
 * How install NativePageTransitions
 * ionic cordova plugin add com.telerik.plugins.nativepagetransitions
 */

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private nativePageTransitions: NativePageTransitions) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: HomePage },
      { title: 'Portfolio', component: ProjetsPage },
      { title: 'Articles', component: BlogPage },
      { title: 'A propos', component: AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    }
    this.nativePageTransitions.curl(options);
    this.nav.setRoot(page.component);
  }

  changeColor() {
    // document.querySelector('.content').style.backgroundColor = "#222";
  }
}
;