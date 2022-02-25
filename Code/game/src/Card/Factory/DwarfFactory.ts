import { CardFactory } from "./CardFactory";
import { Card } from "../Card";
import { Dwarf } from "../Dwarf";

export class DwarfFactory extends CardFactory {

    public CreateCard(name:string, typeName:string, receipe:JSON, nb:number) : Array<Card> {
        let cards : Array<Card> = [];
        for (let i = 0; i < nb; i++) {
            cards.push(new Dwarf(name, typeName, receipe['first_value'], receipe['second_value'], receipe['up_symbol'], receipe['stop_symbol']));
        }
        return cards;
    }
}