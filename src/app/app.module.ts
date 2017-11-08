import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
// ionic cordova plugin add cordova-sqlite-storage
import {IonicStorageModule} from "@ionic/storage";
//npm install @ionic-native/badge -- save
//ionic cordova plugin add cordova-plugin-badge
import {Badge} from "@ionic-native/badge"
import {ScreenOrientation} from "@ionic-native/screen-orientation"

@NgModule({
  declarations: [
    MyApp,
    //HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Badge,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
