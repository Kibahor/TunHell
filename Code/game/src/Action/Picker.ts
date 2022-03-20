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
            else if (mine_card instanceof Enemy) { 
                if (!this.pickerActionEnemy(card, mine_card, noMine, gameboard, player)) { gameboard.recruitCenter.addCard(card); gameboard.players[player].mines[noMine].removeCard(card); return; }
            }
            else if (mine_card instanceof Treasure) { 
                if (!this.pickerActionTreasure(card, mine_card, noMine, gameboard, player)) { gameboard.recruitCenter.addCard(card); gameboard.players[player].mines[noMine].removeCard(card); return; }
            }    
            else { 
                console.log(`Action for the mined card ${card.name} not implemented ;(`); 
                console.log('The card has been add to the unUsedCard stack (temporary solution).');
                gameboard.unUsedCards.addCard(card); 
            }  
        }  
    }

    private pickerActionBonus(card: Card, mine_card: Card, noMine: number, gameboard: GameBoard, player: number) : boolean {    // Manque le test de puissance de combat
        if ((card as Dwarf).first_value >= (mine_card as Bonus).pickaxe_value) {
            console.log(`The picker "${card.name}" has mined a "${mine_card.name}" in the mine ${noMine}!`);
            return this.cardMinedAction(mine_card, noMine, gameboard, player);
        }
        console.log(`The picker "${card.name}" is not enough strong to mine "${mine_card.name}" in the mine ${noMine+1}!`);
        gameboard.mines[noMine].addCardToBegin(mine_card);
        return false;
    }

    private pickerActionEnemy(card: Card, mine_card: Card, noMine: number, gameboard: GameBoard, player: number) : boolean {
        let type = mine_card.typeName;
        switch (type) {
            case 'Other':
                console.log(`The picker "${card.name}" has mined a "${mine_card.name}" in the mine ${noMine+1}!`);
                return this.cardMinedAction(mine_card, noMine, gameboard, player);
            case 'Meetings':
                console.log(`The picker "${card.name}" has found a "${mine_card.name}" in the mine ${noMine+1}!`);
                return this.cardMinedAction(mine_card, noMine, gameboard, player);
            default:
                console.log(`The picker "${card.name}" is not enough strong to mine "${mine_card.name}" in the mine ${noMine+1}!`);
                return false;
        }
    }

    private pickerActionTreasure(card: Card, mine_card: Card, noMine: number, gameboard: GameBoard, player: number) : boolean {
        if (debugValue) { console.log('[DEBUG] pickerActionTreasure not implemented'); }
        return this.cardMinedAction(mine_card, noMine, gameboard, player);
    }

    public combatValue(player: number, noMine: number, gameboard: GameBoard) : number {
        let combatValue: number = 0;
        for (let card of gameboard.players[player].mines[noMine].collection) {
            if (card.typeName = 'Warrior') {
                combatValue += (card as Dwarf).first_value;       
            }
            else if (card.typeName == 'Picker') {
                combatValue += (card as Dwarf).second_value;
            }
        }
        return combatValue;
    }

    private cardMinedAction(card: Card, nMine: number, gameboard: GameBoard, player: number) : boolean {
        if (debugValue) { console.log('[DEBUG] cardMinedAction'); }
        switch (card.name) {
            case 'Dirt':
            case 'Treasure':
                console.log(`The card ${card.name} from mine n°${nMine+1} has been added to the "Tresasure collection" of player ${player+1}`)
                gameboard.players[player].treasure.addCard(card);
                break;
            /*case 'Rat':
            case 'Gobelin':
            case 'Orc':
            case 'Troll':
            case 'Dragon':
                break;*/
            default:
                console.log(`Action for the mined card ${card.name} not implemented ;(`); 
                console.log('The card has been add to the unUsedCard stack (temporary solution).');
                gameboard.unUsedCards.addCard(card);
                return false;
        }
        return true;
    }
}