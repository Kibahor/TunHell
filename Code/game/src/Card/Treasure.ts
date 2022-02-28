import { Card } from './Card'

export class Treasure extends Card {
    public gold_value:number;
    public trophy:boolean;

    public constructor(name:string, typeName:string, gold_value:number, end_mine:boolean, trophy:boolean) {
        super(name, typeName, end_mine);
        this.gold_value = gold_value;
        this.trophy = trophy;
    }

    public printCard() : void {
        super.printCard();
        console.log('Gold value : '+this.gold_value);
        console.log('Trophy ? : '+this.trophy);
    }
}