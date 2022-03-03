import { Card } from "./Card/Card";
import { Stack } from "./Card/Stack";

export class Player{
    public playerHand:Stack;
    public mines:Array<Stack>;
    public trophy:Array<Card>;
    //Treasure

    public constructor(playerHand:Stack){
        this.playerHand = playerHand;
    }

    public moveCardToMine(noCard:number,noMine:number){
        if(noMine > this.mines.length)
            throw new Error("Mine number is too higher !")
        this.playerHand.moveCardToStack(this.playerHand.collection[noCard],this.mines[noMine]);
    }
}