
//ionic generate page details

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { ShowDetail } from '../../models/showDetail';
import { ApiResultDetail } from '../../models/apiResultDetail';
import { Show } from '../../models/show';
import { Storage } from '@ionic/storage';
import { Badge } from '@ionic-native/badge';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  showdetail: ShowDetail;
  show: Show;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient, private badge:Badge, private storage : Storage, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('title');
    var id = this.navParams.get('tvshowId');
    this.show = this.navParams.get('showobject')
    this.http.get<ApiResultDetail>(`https://www.episodate.com/api/show-details?q=${id}`)
    .subscribe(result => (this.showdetail = result.tvShow));
  }


  addToFav(){
    this.storage.set(this.show.id.toString(), this.show).then(() => {
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
