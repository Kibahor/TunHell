export abstract class Card { 
   public name:string;
   public typeName:string;
   public end_mine:boolean;

   public constructor(name:string,typeName:string,end_mine:boolean) {
      this.name = name;
      this.typeName = typeName;
      this.end_mine = end_mine;
   }

   public printCard() : void {
      console.log('=============Carte=============');
      console.log('Name: ' + this.name);
      console.log('TypeName: ' + this.typeName);
      console.log('End mine : ' + this.end_mine);
   }

}; 
