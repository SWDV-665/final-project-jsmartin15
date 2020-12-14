import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoProvider } from '../../providers/photo-service-provider/photo-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

    constructor(public navCtrl: NavController, public photoService: PhotoProvider) {

    }
    onInit(){
      // load images 
      // breaks app in development
      this.photoService.loadSaved();
    }
  // take a photo
    takePicture(){
      console.log("Taking Photo");
      this.photoService.takePicture();
    }
  }
  