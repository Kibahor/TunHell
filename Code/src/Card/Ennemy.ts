import { Card } from './Card'

export class Enemy extends Card {
    fight_value:number = 0;
    gold_value:number = 0;
    end_mine:boolean = false;

    public constructor(name:string, fight_value:number, gold_value:number, end_mine:boolean){
        super(name);
        this.fight_value = fight_value;
        this.gold_value = gold_value;
        this.end_mine = end_mine;
    }
}