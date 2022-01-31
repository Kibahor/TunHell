import {Type} from "./Type"

export class Carte { 
   public name:string;
   public valeur1:number;
   public valeur2:number;
   public type:Type;

   constructor(name:string, valeur1:number, valeur2:number, type:Type){
      this.name=name;
      this.valeur1=valeur1;
      this.valeur2=valeur2;
      this.type=type;
   }

   public printCarte(){
      console.log("Name: "+this.name);
      console.log("Valeur1: "+this.valeur1);
      console.log("Valeur2: "+this.valeur2);
      console.log("Type: "+this.type);
   }

}; 
