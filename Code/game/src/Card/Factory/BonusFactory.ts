import { Bonus } from "../Bonus";
import { Card } from "../Card";
import { CardFactory } from "./CardFactory";

export class BonusFactory extends CardFactory {

    public CreateCard(name:string, typeName:string, receipe:JSON, nb:number) : Array<Card> {
        let cards : Array<Card> = [];
        for (let i = 0; i < nb; i++) {
            cards.push(new Bonus(name, typeName, receipe['pickaxe_value'], receipe['fight_value']));
        }
        return cards;
    }
}