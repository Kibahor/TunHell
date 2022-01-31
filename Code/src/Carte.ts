import { TypeCarte } from './typeCarte'
import { TypeNain } from './TypeNain';

export class Carte { 
   public name:string;
   public typeCarte:TypeCarte;
   public typeNain:TypeNain;
   public valeur1:number;
   public upSymbol:boolean;
   public stopSymbol:boolean;

   public constructor(name:string, typeCarte:TypeCarte, typeNain:TypeNain, valeur1:number, upSymbol:boolean, stopSymbol:boolean){
      this.name=name;
      this.typeCarte=typeCarte;
      this.typeNain=typeNain;
      this.valeur1=valeur1;
      this.upSymbol=upSymbol;
      this.stopSymbol=stopSymbol;
   }

   public printCarte() : void {
      console.log('=============Carte=============');
      console.log('Name: ' + this.name);
      console.log('Valeur1: ' + this.valeur1);
      console.log('typeCarte: ' + this.typeCarte);
      console.log('typeNain: ' + this.typeNain);
      console.log('Up Symbole: ' + this.upSymbol);
      console.log('Stop Symbole: ' + this.stopSymbol);
   }

}; 
