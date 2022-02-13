import { Card } from './Card/Card'
import { StackType} from './StackType'

export class Stack {
    public name:string;
    public type:StackType;
    public collection:Array<Card> = [];

    public constructor(name:string, type:StackType) {
        this.name = name;
        this.type = type;
    }

    public addCard(card:Card):void {
        this.collection.push(card);
    }

    public removeCard(card : Card) : void {
        const index = this.collection.indexOf(card, 0);
        if (index > -1) {
            this.collection.splice(index, 1);
        }
    }

    public addCollection(collection:Array<Card>):void {
        for(let card of collection) {
            this.collection.push(card);
        }
    }

    public getCardByName(name : String) : Card {
        this.collection.forEach(element => {
            if (name === element.name) {
                return element;
            }
        });
        return null;
    }
}