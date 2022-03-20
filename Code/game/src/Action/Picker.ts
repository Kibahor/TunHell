import { GameBoard } from "../Game/GameBoard";
import { Card } from "../Card/Card";
import { Bonus } from "../Card/Bonus";
import { Dwarf } from "../Card/Dwarf";
import { Enemy } from "../Card/Enemy";
import { Treasure } from "../Card/Treasure";

import { debugValue } from "../Launcher";

export class Picker {

    public pickerAction(card:Card, noMine: number, gameboard: GameBoard, player: number) : void {  
        if (debugValue) { console.log('[DEBUG] Begining of the picker action'); }

        for (let i=0; i < (card as Dwarf).first_value; i++) {
            if (debugValue) { console.log('[DEBUG] Begin of the loop'); }

            let mine_card = gameboard.mines[noMine].collection.shift(); 

            if (mine_card instanceof Bonus) {
                this.pickerActionBonus(card, mine_card, noMine, gameboard, player);
            }
            /*else if (mine_card instanceof Dwarf) {
                if (!this.pickerActionDwarf(card, mine_card, noMine, gameboard, player)) { gameboard.recruitCenter.addCard(card); gameboard.players[player].mines[noMine].removeCard(card); return; }
            }*/
            else if (mine_card instanceof Enemy) { 
                if (!this.pickerActionEnemy(card, mine_card, noMine, gameboard, player)) { 
                    gameboard.recruitCenter.addCard(card); 
                    gameboard.players[player].mines[noMine].removeCard(card);
                    return 
                }
            }
            /*else if (mine_card instanceof Treasure) {
                if (!this.pickerActionTreasure(card, mine_card, noMine, gameboard, player)) { gameboard.recruitCenter.addCard(card); gameboard.players[player].mines[noMine].removeCard(card); return; }
            }*/ 
            else {
                this.promtNotImplemented(mine_card.name, mine_card.typeName, gameboard, card);
            }        
        }  
        gameboard.recruitCenter.addCard(card); 
        gameboard.players[player].mines[noMine].removeCard(card);
    }

    private pickerActionBonus(card: Card, mine_card: Card, noMine: number, gameboard: GameBoard, player: number) {    // Manque le test de puissance de combat
        if (debugValue) { console.log('[DEBUG] pickerActionBonus'); }
        console.log(`The "${card.name}" has mined a "${mine_card.name}" in the mine ${noMine+1}!`);
        this.cardMinedAction(mine_card, noMine, gameboard, player);
    }

    private pickerActionEnemy(card: Card, mine_card: Card, noMine: number, gameboard: GameBoard, player: number) : boolean {
        if (debugValue) { console.log('[DEBUG] pickerActionEnemy'); }
        let type = mine_card.typeName;
        switch (type) {
            case 'Other':
                console.log(`The "${card.name}" has mined a "${mine_card.name}" in the mine ${noMine+1}!`);
                this.cardMinedAction(mine_card, noMine, gameboard, player);
                break;
            case 'Meetings':
                console.log(`The "${card.name}" has found a "${mine_card.name}" in the mine ${noMine+1}!`);
                return this.cardMinedAction(mine_card, noMine, gameboard, player);
            default:
                this.promtNotImplemented(mine_card.name, mine_card.typeName, gameboard, card);
        }
        return true;
    }

    private pickerActionTreasure(card: Card, mine_card: Card, noMine: number, gameboard: GameBoard, player: number) {
        if (debugValue) { console.log('[DEBUG] pickerActionTreasure'); }
        this.cardMinedAction(mine_card, noMine, gameboard, player);
    }

    private pickerActionDwarf(card: Card, mine_card: Card, noMine: number, gameboard: GameBoard, player: number) {
        if (debugValue) { console.log('[DEBUG] pickerActionDwarf'); }
        this.cardMinedAction(mine_card, noMine, gameboard, player);
    }

    public combatValue(player: number, noMine: number, gameboard: GameBoard) : number {
        let combatValue: number = 0;
        for (let card of gameboard.players[player].mines[noMine].collection) {
            if (debugValue) {
                console.log(`[DEBUG] Name ${card.name}`);
                console.log(`[DEBUG] First ${(card as Dwarf).first_value}`);
                console.log(`[DEBUG] Second ${(card as Dwarf).second_value}`);
            }
            if (card.typeName == 'Warrior') {
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
        let cardType = card.typeName;
        let cardName = card.name;
        if (debugValue) { console.log(`[DEBUG] cardType ${cardType}`); }
        if (debugValue) { console.log(`[DEBUG] cardName ${cardName}`); }

        if (card instanceof Enemy) {
            if (debugValue) { console.log('[DEBUG] case Enemy'); }
            switch (cardName) {
                case 'Dirt':
                case 'Treasure':
                    console.log(`The card ${cardName} from mine n°${nMine+1} has been added to the "Tresasure collection" of player ${player+1}`);
                    gameboard.players[player].treasure.addCard(card);
                    break;
                case 'Rat':
                case 'Gobelin':
                case 'Orc':
                case 'Troll':
                case 'Dragon':
                    let playerCombatValue = this.combatValue(player, nMine, gameboard);
                    let monsterCombatValue = (card as Enemy).fight_value;
        
                    if (debugValue) { console.log(`[DEBUG] Player combat value ${playerCombatValue}`); }
                    if (debugValue) { console.log(`[DEBUG] Monster combat value ${monsterCombatValue}`); }
        
                    if (playerCombatValue >= monsterCombatValue) {   
                        console.log(`The card ${cardName} from mine n°${nMine+1} has been defeat and added to the "Tresasure collection" of player ${player+1}`);
                        gameboard.players[player].treasure.addCard(card);
                    }
                    else {
                        console.log(`The card ${cardName} from mine n°${nMine+1} is too strong for the player ${player+1}`);
                        gameboard.mines[nMine].addCardToBegin(card);
                        return false;
                    }
                    break;         
                default:
                    this.promtNotImplemented(cardName, cardType, gameboard, card);
            }
        }
        else if (card instanceof Bonus) {
            if (debugValue) { console.log('[DEBUG] case Bonus'); }
            switch (cardName) {
                case 'Beer_of_bravery':
                case 'Nawak_sword':
                case 'Old_pickaxe':
                    if (gameboard.players[player].playerHand.collection.length < 6) {
                        console.log(`The card ${cardName} from mine°${nMine+1} has been added to the "Hand" of player ${player+1}`);
                        gameboard.players[player].playerHand.addCard(card);
                    }
                    else {
                        console.log(`You haven\'t enough place to store the card ${cardName}, the card has been discarded`);
                        gameboard.recruitCenter.addCard(card);
                    }
                    break;
                default:
                    this.promtNotImplemented(cardName, cardType, gameboard, card);
            }
        }
    }

    private promtNotImplemented(cardName: string, cardType: string, gameboard: GameBoard, card: Card) : void {
        console.log(`Action for the mine card ${cardName} of type ${cardType} not implemented ;(`); 
                console.log('The card has been add to the unUsedCard stack (temporary solution)');
                gameboard.unUsedCards.addCard(card);
    }
}