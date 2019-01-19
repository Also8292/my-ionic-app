import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { ArticlePage } from './article/article';

/**
 * Generated class for the BlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {
  
  readonly ROOT_URL = "http://127.0.0.1:8000/api/articles.json/";
  articles: any;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.title = "Blog";
    this.articles = this.http.get(this.ROOT_URL);
    // console.log(this.articles);
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }

  goToArticle(id, title, content, datePub) {
    // console.log("Click");
    this.navCtrl.push(ArticlePage, {
      id: id,
      title: title,
      content: content,
      datePub: datePub
    });
    
  }

}
