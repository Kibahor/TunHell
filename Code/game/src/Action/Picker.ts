import { GameBoard } from "../Game/GameBoard";
import { Card } from "../Card/Card";
import { Bonus } from "../Card/Bonus";
import { Enemy } from "../Card/Enemy";
import { Dwarf } from "../Card/Dwarf";
import { Treasure } from "../Card/Treasure";

import { debugValue } from "../Launcher";

export class Picker {

    public pickerAction(card:Card, noMine: number, gameboard: GameBoard, player: number) : void {   
        //let mine_card = this.gameboard.mines[noMine].collection.shift();      // Pas ouf car on peut ne pas avoir besoin de la carte
        
        // Tester le type de la carte dans la mine
        if (debugValue) { console.log('[DEBUG] Begining of the picker action'); }
        while (true) {
            if (debugValue) { console.log('[DEBUG] Begin of the loop'); }
            let mine_card = gameboard.mines[noMine].collection[0];
            if (mine_card instanceof Bonus) {
                if (!this.pickerActionBonus(card, mine_card, noMine, gameboard)) { gameboard.recruitCenter.addCard(card); return; }   // on défausse le mineur
            }
            //else if (mine_card instanceof Treasure) { return; }
            else if (mine_card instanceof Enemy) { 
                if (!this.pickerActionEnemy(card, mine_card, noMine, gameboard, player)) { gameboard.recruitCenter.addCard(card); return; }
             }
            else { console.log(`Card ${mine_card.name} of type ${mine_card.typeName} not implemented ;(`); return; }  
        }    
    }

    private pickerActionEnemy(card: Card, mine_card: Card, noMine: number, gameboard: GameBoard, player: number) : boolean {
        if (mine_card.typeName == "Other") {
            console.log(`The picker "${card.name}" has mined a "${mine_card.name}" in the mine ${noMine}!`);
            this.cardMineAction(mine_card, noMine, gameboard);
            return true;
        }
        else if (false) {

        }
        console.log(`The picker "${card.name}" is not enough strong to mine "${mine_card.name}" in the mine ${noMine}!`);
        return false;
    }

    private pickerActionBonus(card: Card, mine_card: Card, noMine: number, gameboard: GameBoard) : boolean {
        if ((card as Dwarf).first_value >= (mine_card as Bonus).pickaxe_value) {
            console.log(`The picker "${card.name}" has mined a "${mine_card.name}" in the mine ${noMine}!`);
            this.cardMineAction(mine_card, noMine, gameboard);
            return true;
        }
        console.log(`The picker "${card.name}" is not enough strong to mine "${mine_card.name}" in the mine ${noMine}!`);
        return false;
    }

    private cardMineAction(card: Card, nMine: number, gameboard: GameBoard) : void {
        if (false) {}
        else if (false) {}
        else { 
            console.log(`Action for the mined card ${card.typeName} not implemented ;(`); 
            console.log('The card has been add to the unUsedCard stack (temporary solution).');
            gameboard.unUsedCards.addCard(card);
        }
    }
}