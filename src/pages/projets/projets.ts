import { ProjetPage } from './projet/projet';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
// import { Title } from '@angular/platform-browser';


@Component({
  selector: 'page-projets',
  templateUrl: 'projets.html',
})
export class ProjetsPage {
  title: string;

  readonly ROOT_URL = "http://127.0.0.1:8000/api/projects.json/";
  image_url: any;
  projects: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.title = "Projets";
    this.image_url = "http://127.0.0.1:8000/uploads/images/projects/";
    this.projects = this.http.get(this.ROOT_URL);
  }

  goToProject(id, title, description, duree, image) {
    this.navCtrl.push(ProjetPage,
      {
        title: title,
        description: description,
        duree: duree,
        image: image,
        image_url: this.image_url
      }  
    );
  }

}
