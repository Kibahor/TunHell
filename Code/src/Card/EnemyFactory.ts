import { CardFactory } from "./CardFactory";
import { Card } from "./Card";
import { Enemy } from "./Enemy";

export class EnemyFactory extends CardFactory {

    public CreateCard(receipe:JSON, nb:number) : Array<Card> {

        if (!this.verify_receipe(receipe)) {
            throw new TypeError("La recette donnée n'est pas compatible !");
        }
        let cards : Array<Card> = [];
        for (let i = 0; i < nb; i++) {
            cards.push(new Enemy('Enemy', receipe['fight_value'], receipe['gold_value'], receipe['end_mine']));
        }
        return cards;
    }

    public verify_receipe(receipe:JSON) : boolean {
        try {
            if (!(
                receipe['fight_value'] === Number &&
                receipe['gold_value'] === Number &&
                receipe['end_mine'] === Boolean
            )) {
                throw "Invalid !";
            }      
        }
        catch (err) {
            return false;
        }
        return true;
    }
}