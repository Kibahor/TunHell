import { Card } from './Card'

export class Trophy extends Card {
    public gold_value:number;

    public constructor(name:string, gold_value:number){
        super(name);
        gold_value = gold_value;
        //Mettre exception si le nom ne contient pas "Trophy"
    }

    public printCard() : void {
        super.printCard();
        console.log('Gold value : '+this.gold_value);
    }
}