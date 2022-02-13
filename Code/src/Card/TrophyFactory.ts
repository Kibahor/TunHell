import { CardFactory } from "./CardFactory";
import { Card } from "./Card";
import { Trophy } from "./Trophy";

export class TrophyFactory extends CardFactory {

    public CreateCard(receipe:JSON, nb:number) : Array<Card> {

        if (!this.verify_receipe(receipe)) {
            throw new TypeError("La recette donnée n'est pas compatible !");
        }
        let cards : Array<Card> = [];
        for (let i = 0; i < nb; i++) {
            cards.push(new Trophy(receipe['name'], receipe['gold_value']));
        }
        return cards;
    }

    public verify_receipe(receipe:JSON) : boolean {
        return false;
    }
}