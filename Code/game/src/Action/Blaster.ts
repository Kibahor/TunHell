import { GameBoard } from "../Game/GameBoard";
import { Card } from "../Card/Card";


export class Blaster {

    public blasterAction(blaster: Card, noMine: number, gameboard: GameBoard) : void {
        for (let i=1; i < gameboard.nbPlayers; i++) {
            let mine = gameboard.players[i].mines[noMine];
            for (let card of mine.collection) {
                if (card.typeName === "Warrior") {
                    gameboard.recruitCenter.addCard(card);
                    mine.removeCard(card);
                }
            }
        }
        gameboard.mines[noMine].removeCard(blaster);
        gameboard.recruitCenter.addCard(blaster);
    }
}