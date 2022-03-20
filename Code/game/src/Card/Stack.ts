import { Card } from './Card'
import { StackType} from './StackType'

export class Stack {
    public name : string;
    public type : StackType;
    public collection : Array<Card> = [];

    public constructor(name : string, type : StackType) {
        this.name = name;
        this.type = type;
    }

    public addCard(card : Card) : void {
        this.collection.push(card);
    }

    public addCardToBegin(card: Card) : void {
        this.collection.unshift(card);
    }

    public removeCard(card : Card) : void {
        const index = this.collection.indexOf(card, 0);
        if (index > -1) {
            this.collection.splice(index, 1);
        }
    }

    public addCollection(collection : Array<Card>) : void {
        this.collection = this.collection.concat(collection);
    }

    public getCardByName(name : string) : Card {
        this.collection.forEach(element => {
            if (name == element.name) {
                return element;
            }
        });
        return null;
    }

    public lenghtMaxFive() : number {
        let n : number = this.collection.length;
        if (n > 5) {
            return 5;
        }
        return n;
    }

    public moveCardToStack(card : Card, stack : Stack) : void {
        this.removeCard(card);
        stack.addCard(card);
    }

    public clearStack() : void {
        this.collection = [];
    }

    public toString():string {
        let str:string = '';
        let i = 1;
        for(let card of this.collection) {
            str+=`\n(${i}) ${card.typeName} - ${card.name}`;
            i++;
        }
        return str;
    }

    public toStringFirst(nb: number) : string {
        let str : string = 'The next cards are:';
        let i : number = 0;
        for (let card of this.collection) {
            str+=`\n(${i+1}) ${card.typeName} - ${card.name}`;
            i++;
            if (i >= nb) {
                break;
            }
        }
        return str;
    }
}