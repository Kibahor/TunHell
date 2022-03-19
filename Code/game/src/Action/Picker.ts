import { GameBoard } from "../Game/GameBoard";
import { Card } from "../Card/Card";
import { Bonus } from "../Card/Bonus";
import { Enemy } from "../Card/Enemy";
import { Dwarf } from "../Card/Dwarf";
import { Treasure } from "../Card/Treasure";

import { debugValue } from "../Launcher";

export class Picker {

    public pickerAction(card:Card, noMine: number, gameboard: GameBoard, player: number) : void {  
        if (debugValue) { console.log('[DEBUG] Begining of the picker action'); }
        while (true) {
            if (debugValue) { console.log('[DEBUG] Begin of the loop'); }
            let mine_card = gameboard.mines[noMine].collection.shift();

            if (mine_card instanceof Bonus) {
                if (!this.pickerActionBonus(card, mine_card, noMine, gameboard, player)) { gameboard.recruitCenter.addCard(card); gameboard.players[player].mines[noMine].removeCard(card); return; }
            }
            else if (mine_card instanceof Treasure) { 
                if (!this.pickerActionTreasure(card, mine_card, noMine, gameboard, player)) { gameboard.recruitCenter.addCard(card); gameboard.players[player].mines[noMine].removeCard(card); return; }
             }
            else if (mine_card instanceof Enemy) { 
                if (!this.pickerActionEnemy(card, mine_card, noMine, gameboard, player)) { gameboard.recruitCenter.addCard(card); gameboard.players[player].mines[noMine].removeCard(card); return; }
             }
            else { console.log('This text shall not be visible!!'); return; }  
        }  
    }

    private pickerActionEnemy(card: Card, mine_card: Card, noMine: number, gameboard: GameBoard, player: number) : boolean {
        if (mine_card.typeName == 'Other') {
            console.log(`The picker "${card.name}" has mined a "${mine_card.name}" in the mine ${noMine}!`);
            return this.cardMinedAction(mine_card, noMine, gameboard, player);
        }
        else if (mine_card.typeName == 'Meetings') {
            console.log(`The picker "${card.name}" has found a "${mine_card.name}" in the mine ${noMine}!`);
            return this.cardMinedAction(mine_card, noMine, gameboard, player);
        }
        console.log(`The picker "${card.name}" is not enough strong to mine "${mine_card.name}" in the mine ${noMine}!`);
        return false;
    }

    private pickerActionBonus(card: Card, mine_card: Card, noMine: number, gameboard: GameBoard, player: number) : boolean {
        if ((card as Dwarf).first_value >= (mine_card as Bonus).pickaxe_value) {
            console.log(`The picker "${card.name}" has mined a "${mine_card.name}" in the mine ${noMine}!`);
            return this.cardMinedAction(mine_card, noMine, gameboard, player);
        }
        console.log(`The picker "${card.name}" is not enough strong to mine "${mine_card.name}" in the mine ${noMine}!`);
        return false;
    }

    private pickerActionTreasure(card: Card, mine_card: Card, noMine: number, gameboard: GameBoard, player: number) : boolean {
        if (debugValue) { console.log('[DEBUG] pickerActionTreasure not implemented'); }
        return this.cardMinedAction(mine_card, noMine, gameboard, player);
    }

    private cardMinedAction(card: Card, nMine: number, gameboard: GameBoard, player: number) : boolean {
        if (debugValue) { console.log('[DEBUG] cardMinedAction'); }
        switch (card.name) {
            case 'Dirt':
            case 'Treasure':
                console.log(`The card ${card.name} from mine n°${nMine+1} has been added to the "Tresasure collection" of player ${player+1}`)
                gameboard.players[player].treasure.addCard(card);
                break;
            default:
                console.log(`Action for the mined card ${card.name} not implemented ;(`); 
                console.log('The card has been add to the unUsedCard stack (temporary solution).');
                gameboard.unUsedCards.addCard(card);
                return false;
        }
        return true;
    }
}