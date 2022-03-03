import { Card } from "./Card/Card";
import { GameBoard } from "./GameBoard";

export class Round{
    public pickDwarf(g:GameBoard, selectPlayer:number){
        g.recruitCenter.collection
    }

    public playDwarf(){

    }

    public activeCard(){
        for(let mine of g.mineStack){
            let cards = mine.getPlayerCards(selectPlayer);
            for(let card of cards){
                this.playEffect(card);
            }
        }
    }

    public playEffect(card:Card){
        if(card.typeName === 'Picker'){
            
        }
    }
}