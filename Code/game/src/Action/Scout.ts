import { GameBoard } from "../Game/GameBoard";
import { Card } from "../Card/Card";
import { Dwarf } from "../Card/Dwarf";

export class Scout {

    public scoutAction(scout: Card, noMine: number, gameboard: GameBoard) : void {
        console.log(gameboard.mines[noMine].toStringFirst((scout as Dwarf).first_value));
        gameboard.mines[noMine].removeCard(scout);
        gameboard.recruitCenter.addCard(scout);
    }
}