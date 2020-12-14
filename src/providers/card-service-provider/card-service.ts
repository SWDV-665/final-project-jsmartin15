
import { Injectable } from '@angular/core';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardProvider {
    cards=[];

  constructor() {
    console.log('Hello CardProvider Provider');
  }
  
  
  getCards(){
        return this.cards;
    }

  addCard(card){
    this.cards.push(card);
  }

  editCard(card, index){
    this.cards[index] = card;
  }

  removeCard(index){
    this.cards.splice(index, 1);
  
  }

  // function not yet available
  shareCard(card, index){
      console.log("share clicked");
    
  }

}