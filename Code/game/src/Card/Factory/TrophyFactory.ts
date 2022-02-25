import { CardFactory } from "./CardFactory";
import { Card } from "../Card";
import { Trophy } from "../Trophy";

export class TrophyFactory extends CardFactory {

    public CreateCard(typeName:string, receipe:JSON, nb:number) : Array<Card> {
        let cards : Array<Card> = [];
        for (let i = 0; i < nb; i++) {
            cards.push(new Trophy('Trophy', receipe['gold_value']));
        }
        return cards;
    }
    /*
    public verify_receipe(receipe:JSON) : boolean {
        try {
            if (!(receipe['gold_value'] === Number)) {
                throw "Invalid!";
            }      
        }
        catch (err) {
            return false;
        }
        return true;
    }*/
}