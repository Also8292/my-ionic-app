import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  id: any;
  title: any;
  content: any;
  datePub: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.id = navParams.get("id");
    this.title = navParams.get("title");
    this.content = navParams.get("content");
    this.datePub = navParams.get("datePub");    
  }

  ionViewDidLoad() {
    console.log('');
  }

}
