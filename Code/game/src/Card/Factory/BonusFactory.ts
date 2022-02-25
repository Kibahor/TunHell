import { Bonus } from "../Bonus";
import { Card } from "../Card";
import { CardFactory } from "./CardFactory";

export class BonusFactory extends CardFactory {

    public CreateCard(typeName:string, receipe:JSON, nb:number) : Array<Card> {
        let cards : Array<Card> = [];
        for (let i = 0; i < nb; i++) {
            cards.push(new Bonus(typeName, receipe['pickaxe_value'], receipe['fight_value']));
        }
        return cards;
    }
}