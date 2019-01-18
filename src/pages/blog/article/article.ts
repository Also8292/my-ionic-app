import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  readonly ROOT_URL = "http://127.0.0.1:8000/api/articles/";
  arts: any;

  id: Number;
  test: string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.id = navParams.get("ident");
    this.arts = this.http.get(this.ROOT_URL + this.id + ".json");
    this.test = this.ROOT_URL + this.id + ".json";
  }

  ionViewDidLoad() {
    console.log('');
  }

}
