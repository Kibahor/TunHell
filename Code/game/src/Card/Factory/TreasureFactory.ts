import { CardFactory } from "./CardFactory";
import { Card } from "../Card";
import { Treasure } from "../Treasure";

export class TreasureFactory extends CardFactory {

    public CreateCard(name:string, typeName:string, receipe:JSON, nb:number) : Array<Card> {
        let cards : Array<Card> = [];
        for (let i = 0; i < nb; i++) {
            cards.push(new Treasure(name, typeName, receipe['gold_value']));
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