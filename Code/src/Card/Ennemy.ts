import { Card } from './Card'

export class Enemy extends Card {
    public fight_value:number;
    public gold_value:number;
    public end_mine:boolean;

    public constructor(name:string, fight_value:number, gold_value:number, end_mine:boolean){
        super(name);
        this.fight_value = fight_value;
        this.gold_value = gold_value;
        this.end_mine = end_mine;
        //Mettre exception si le nom ne contient pas "Enemmy"
    }

    public printCard() : void {
        super.printCard();
        console.log('Fight value : ' + this.fight_value);
        console.log('Gold value : ' + this.gold_value);
        console.log('End mine : ' + this.end_mine);
    }
}