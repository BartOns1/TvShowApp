import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Show } from '../../models/show';
/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {


  favourites: Show[] = [];



  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewWillEnter() {
    this.favourites=[];
    this.storage.forEach((val, key) => {
      this.favourites.push(val);
    });
  }

  gotoDetails(show: Show){
    this.navCtrl.push('DetailsPage',{ 
    tvshowId: show.id, 
    title: show.name,
  });
}

}
