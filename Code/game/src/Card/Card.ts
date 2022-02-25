export abstract class Card { 
   public name:string;
   public typeName:string;

   public constructor(name:string,typeName:string) {
      this.name = name;
      this.typeName = typeName;
   }

   public printCard() : void {
      console.log('=============Carte=============');
      console.log('Name: ' + this.name);
      console.log('TypeName: ' + this.typeName);
   }

}; 
