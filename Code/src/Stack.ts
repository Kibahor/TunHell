import { Card } from './Card'

export class Stack {
    public name:string;
    public combatValue:number = 0;
    public cardList:Array<Card> = [];

    public constructor(name:string) {
        this.name = name;
    }
}