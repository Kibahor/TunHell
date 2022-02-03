import { Card } from "./Card"
import { CardType } from "./CardType"

export class CardWithBonus extends Card {
    public value2: number

    public constructor(name:string, CardType:CardType, value1:number, value2:number, upSymbol:boolean, stopSymbol:boolean) {
        super(name,CardType,value1,upSymbol,stopSymbol);
        this.value2 = value2;
    }

    public printCard(): void {
        super.printCard();
        console.log('========CarteWithBonus========');
        console.log("Valeur2: "+this.value2);
    }
}