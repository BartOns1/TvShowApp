import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TvShow } from "../../models/tvshow";
import { HttpClient } from '@angular/common/http';
import { Show } from '../../models/show';
import { ApiResult } from '../../models/apiResult';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  tvshows: TvShow[] = [
    new TvShow("Stranger Things", "https://loremflickr.com/60/60"), new TvShow("The Ateam", "https://loremflickr.com/60/60"), new TvShow("Startrek", "https://loremflickr.com/60/60")
  ];


  shows: Show[]=[] ;

  constructor(private http:HttpClient) {
      this.http.get<ApiResult>('https://www.episodate.com/api/most-popular?page=1')
      .subscribe(result => (this.shows = result.tv_shows));
  }

  search(){
    alert("life is the quest of searching not of knowing");
  }

}
