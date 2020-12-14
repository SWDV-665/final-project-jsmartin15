
import { Injectable } from '@angular/core';
import { AlertController} from 'ionic-angular';
import { CardProvider } from '../card-service-provider/card-service';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogProvider {

  constructor(public alrtCtrl: AlertController, public cardService: CardProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }
  showPrompt(card?, index?) {
        let prompt = this.alrtCtrl.create({
            title: card ? 'Edit Card' :'Add Card',
            message: card ? "Enter Changes" : "Make a card.",

            inputs :[
                {
                    name: 'name',
                    placeholder: 'Name Your Card',
                    value: card ? card.name: null
                },
                {

                    name: 'statOne',
                    placeholder: 'Enter Stat Name',
                    value: card ? card.statOne: null
                },

                {
                    name: 'statOneValue',
                    placeholder: 'Enter Stat Value',
                    value: card ? card.statOneValue: null
                },

                {

                    name: 'statTwo',
                    placeholder: 'Enter Stat Name',
                    value: card ? card.statTwo: null
                },

                {

                    name: 'statTwoValue',
                    placeholder: 'Enter Stat Name',
                    value: card ? card.statTwoValue: null
                }
            ],
            
            buttons: [
                {
                    text:'Cancel',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }

                },

                {
                    text: 'Save',
                    handler: data => {
                        console.log('Add Handler -', data);
                        if (index !== undefined){
                            card.name = data.name;
                            card.statOne = data.statOne;
                            card.statOneValue = data.statValue;
                            card.statTwoValue = data.statTwoValue;
                            card.statTwoValue = data.statTwoValue;
                    
                           this.cardService.editCard(data, index);
                    }            
                    else{
                        this.cardService.addCard(data);
                    }
                }

            }   
        ]
    });
    prompt.present();
  }

}
