import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage} from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {IonicStorageModule} from '@ionic/storage'
import { Camera } from '@ionic-native/camera/ngx';
import { PhotoProvider } from '../providers/photo-service-provider/photo-service';
import { InputDialogProvider } from '../providers/input-dialog-service-provider/input-dialog';
import { CardProvider } from '../providers/card-service-provider/card-service';
import { SocialSharing } from '@ionic-native/social-sharing/';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,  
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PhotoProvider,
    InputDialogProvider,
    CardProvider,
    SocialSharing, 
  ]
})
export class AppModule {}
