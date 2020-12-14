import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CardModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card-modal',
  templateUrl: 'card-modal.html',
})
export class CardModalPage {
  card;

  constructor(public navParams: NavParams, public view: ViewController) {
  }

  ionViewWillLoad() {
    const data = this.navParams.get('pCard');
    console.log(data)
  }
  
  closeModal(){
    this.view.dismiss();
  }
}
