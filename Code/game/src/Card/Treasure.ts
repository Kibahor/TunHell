import { Card } from './Card'

export class Treasure extends Card {
    public gold_value:number;

    public constructor(name:string, typeName:string, gold_value:number){
        super(name, typeName);
        gold_value = gold_value;
        //Mettre exception si le nom ne contient pas "Trophy"
    }

    public printCard() : void {
        super.printCard();
        console.log('Gold value : '+this.gold_value);
    }
}