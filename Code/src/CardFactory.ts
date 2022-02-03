import { Card } from "./Card";
import { CardType } from "./CardType";
import {CardWithBonus} from "./CardWithBonus";
export class CardFactory{
    public cardsStack = new Map<string, Card>();

    public generateWarriorsCards() : Array<Card> {
        let warriors = new Array<Card>();
        for(let i = 0; i < 7; i++){
            warriors.push(new Card("Warrior",CardType.DWARF,1,true,false))
        }
        for(let i = 0; i < 5; i++){
            warriors.push(new Card("Warrior",CardType.DWARF,2,false,false))
        }
        for(let i = 0; i < 4; i++){
            warriors.push(new Card("Warrior",CardType.DWARF,3,false,false))
        }
        warriors.push(new Card("Warrior",CardType.DWARF,4,false,true))
        warriors.push(new Card("Warrior",CardType.DWARF,5,false,true))
        return warriors;
    }

    public generatePickerCards() : Array<Card> {
        let pickers = new Array<Card>();
        for (let i = 0; i < 4; i++){
            pickers.push(new Card("Picker",CardType.DWARF,2,true,false))
        }
        for(let i = 0; i < 5; i++){
            pickers.push(new CardWithBonus("Picker",CardType.DWARF,1,2,false,false))
        }
        for(let i = 0; i < 4; i++){
            pickers.push(new CardWithBonus("Picker",CardType.DWARF,2,1,false,false))
        }
        for(let i = 0; i < 4; i++){
            pickers.push(new Card("Picker",CardType.DWARF,3,false,false))
        }
        pickers.push(new CardWithBonus("Picker",CardType.DWARF,4,3,false,false))
        pickers.push(new CardWithBonus("Picker",CardType.DWARF,2,5,false,false))
        return pickers;
    }

    public generateScoutCards() : Array<Card>{
        let scouts = new Array<Card>();
        for(let i = 0; i < 2; i++){
            scouts.push(new Card("Scout",CardType.DWARF,5,false,false))
        }
        for(let i = 0;i < 3; i++){
            scouts.push(new Card("Scout",CardType.DWARF,3,true,false))
        }
        return scouts;
    }
}