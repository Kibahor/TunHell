import { Card } from './Card'

export class Enemy extends Card {
    public fight_value:number;
    public gold_value:number;

    public constructor(name:string, typeName:string, fight_value:number, gold_value:number, end_mine:boolean){
        super(name, typeName, end_mine);
        this.fight_value = fight_value;
        this.gold_value = gold_value;
        //Mettre exception si le nom ne contient pas "Enemmy"
    }

    public printCard() : void {
        super.printCard();
        console.log('Fight value : ' + this.fight_value);
        console.log('Gold value : ' + this.gold_value);
    }
}