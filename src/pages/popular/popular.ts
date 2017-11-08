import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ApiResult } from '../../models/apiResult';
import { Show } from '../../models/show';
import { TvShow } from '../../models/tvshow';
import { Storage } from '@ionic/storage';
import { Badge } from '@ionic-native/badge';

/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {
  shows: Show[];
  

  constructor(public navCtrl: NavController, private http:HttpClient, private storage:Storage,private badge:Badge, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.http.get<ApiResult>('https://www.episodate.com/api/most-popular?page=1')
    .subscribe(result => (this.shows = result.tv_shows));
  }

  gotoDetails(show: Show){
    this.navCtrl.push('DetailsPage',{ 
    tvshowId: show.id, 
    title: show.name,
    showobject: show,
  });
}

  addToFav(show: Show){
      this.storage.set(show.id.toString(), show).then(() => {
        this.badge.increase(1);
        
        let alert = this.alertCtrl.create({
          title: 'succesfully added to favoutites',
        });
        alert.present();
        setTimeout(() => {
          alert.dismiss();
        }, 1000);
      });
}

}
