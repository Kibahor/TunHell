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

    public addCollection(collection:Array<Card>):void {
        for(let card in collection) {
            this.collection.push((card as unknown as Card)); //Chelou le for le met en string au lieu de Card
        }
    }
}