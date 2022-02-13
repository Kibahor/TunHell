import { CardFactory } from "./CardFactory";
import { Card } from "./Card";
import { Dwarf } from "./Dwarf";

export class DwarfFactory extends CardFactory {

    public CreateCard(receipe:JSON, nb:number) : Array<Card> {
        if (!this.verify_receipe(receipe)) {
            throw new TypeError("La recette donnée n'est pas compatible !");
        }
        let cards : Array<Card> = [];
        for (let i = 0; i < nb; i++) {
            cards.push(new Dwarf(receipe['name'], receipe['first_value'], receipe['second_value'], receipe['up_symbol'], receipe['stop_symbol']));
        }
        return cards;
    }

    public verify_receipe(receipe:JSON) : boolean {
        return true;
    }
}