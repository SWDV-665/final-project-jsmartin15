import { Component } from '@angular/core';
import { AlertController, NavController, ModalController } from 'ionic-angular';
import { CardProvider } from '../../providers/card-service-provider/card-service';
import { InputDialogProvider } from '../../providers/input-dialog-service-provider/input-dialog';
import { SocialSharing } from '@ionic-native/social-sharing/';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title="Cards";
    
  errorMessage: string;

  constructor(public navCtrl: NavController, public inputDialog: InputDialogProvider, public alrtCtrl: AlertController, public cardService: CardProvider, public modal: ModalController, public socialSharing: SocialSharing) {

  }
  loadCards(){
    return this.cardService.cards;
  }
  addCard(card){
    console.log("Adding card");
    this.inputDialog.showPrompt();
  }

  editCard(card, index){
    console.log("Editing card");
    this.inputDialog.showPrompt(card, index);
  }

  removeCard(index){
    console.log("Removing card");
    this.cardService.removeCard(index);
  
  }

  shareCard(card, index){
    console.log("Sharing card");
  }

  openModal(card){

    const data = {pCard: card}
    const cardModal = this.modal.create('CardModalPage', {data: card});
    cardModal.present();
  }

  shareItem(card, index){
    console.log("Sharing card - ", card, index);
    
    let message = "Sharing card: " + card.name;
    let subject = " Shared via Cards app";

    this.socialSharing.share(message, subject).then(() => {
      // Sharing via email is possible
      console.log("Shared successfully")
    }).catch((error) => {
      // Sharing via email is not possible
      console.log("Error while sharing", error);
    });
   
  }
}
