import { Card } from './Card'

export class Bonus extends Card {
    public fight_value:number;
    public pickaxe_value:number;

    public constructor(name:string, fight_value:number, pickaxe_value:number){
        super(name);
        this.fight_value = fight_value;
        this.pickaxe_value = pickaxe_value;
    }

    public printCard() : void {
        super.printCard();
        console.log('Fight value : '+this.fight_value);
        console.log('Pickaxe value : '+this.pickaxe_value);
    }
}