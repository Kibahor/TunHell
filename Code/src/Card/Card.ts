export abstract class Card { 
   public name:string;

   public constructor(name:string) {
      this.name = name;
   }

   public printCard() : void {
      console.log('=============Carte=============');
      console.log('Name: ' + this.name);
   }

}; 
