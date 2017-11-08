//ionic start tvApp   is commando om project te starten

//om enkel verticala orientatie toe te laten in de command line
//ionic cordova plugin add cordova-plugin-screen-orientation
//npm install @ionic-native/screen-orientation --save

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TabsPage} from '../pages/tabs/tabs'
import { ScreenOrientation } from '@ionic-native/screen-orientation';
//import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // nu we met tabs werken gaan we een andere nemen
  //rootPage:any = HomePage;

  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, screen: ScreenOrientation) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();



      //om enkel bepaalde orientatie toe te laten voor heel de app
      screen.lock(screen.ORIENTATIONS.PORTRAIT);


    });

  }

}

