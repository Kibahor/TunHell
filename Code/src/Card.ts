import { CardType } from './CardType'
import { SubType } from './SubType';

export class Card { 
   public name:string;
   public cardType:CardType;
   public subType:SubType;
   public value1:number;
   public upSymbol:boolean;
   public stopSymbol:boolean;

   public constructor(name:string, cardType:CardType, subType:SubType, value1:number, upSymbol:boolean, stopSymbol:boolean) {
      this.name = name;
      this.cardType = cardType;
      this.subType = subType;
      this.value1 = value1;
      this.upSymbol = upSymbol;
      this.stopSymbol = stopSymbol;
   }

   public printCard() : void {
      console.log('=============Carte=============');
      console.log('Name: ' + this.name);
      console.log('Valeur1: ' + this.value1);
      console.log('Type Carte: ' + this.cardType);
      console.log('Type Nain: ' + this.subType);
      console.log('Up Symbole: ' + this.upSymbol);
      console.log('Stop Symbole: ' + this.stopSymbol);
   }

}; 
