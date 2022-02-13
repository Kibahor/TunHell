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
        try {
            if (!(
                receipe['first_value'] === Number &&
                receipe['second_value'] === Number &&
                receipe['up_symbol'] === Boolean &&
                receipe['stop_symbol'] === Boolean
            )) {
                throw "Invalid type!";
            }
            // Règle :
            // Si les 2 valeurs sont supérieures à 0 alors les symboles sont forcéments faux 
            if (!(
                (receipe['first_value'] > 0 && receipe['second_value'] > 0)
                && !receipe['up_symbol'] && !receipe['stop_symbol']
            )) {
                throw "Invalid logic!";
            }
            // Règle :
            // 2 symboles ne peuvent être vrais à la fois
            if (!(
                (receipe['up_symbol'] && !receipe['stop_symbol'])
                ||
                (!receipe['up_symbol'] && receipe['stop_symbol'])
                ||
                (receipe['up_symbol'] && receipe['stop_symbol'])
            )) {
                throw "Invalid logic! (2)";
            }
        }
        catch (err) {
            return false;
        }
        return true;
    }
}