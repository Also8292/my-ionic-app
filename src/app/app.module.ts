import { MoreOptionComponent } from './../components/more-option/more-option';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProjetsPage } from '../pages/projets/projets';
import { ProjetPage } from '../pages/projets/projet/projet';
import { BlogPage } from './../pages/blog/blog';
import { ArticlePage } from '../pages/blog/article/article';
import { AboutPage } from './../pages/about/about';
import { SettingPage } from './../pages/setting/setting';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProjetsPage,
    ProjetPage,
    BlogPage,
    ArticlePage,
    MoreOptionComponent,
    SettingPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProjetsPage,
    ProjetPage,
    BlogPage,
    ArticlePage,
    SettingPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativePageTransitions
  ]
})
export class AppModule {}
