import { GameBoard } from "../Game/GameBoard";
import { Card } from "../Card/Card";
import { Bonus } from "../Card/Bonus";
import { Enemy } from "../Card/Enemy";
import { Dwarf } from "../Card/Dwarf";

export class Picker {

    public pickerAction(card:Card, noMine: number, gameboard: GameBoard) : void {   
        //let mine_card = this.gameboard.mines[noMine].collection.shift();      // Pas ouf car on peut ne pas avoir besoin de la carte
        
        // Tester le type de la carte dans la mine
        console.log('Début de l\'action du picker');
        while (true) {
            console.log('loop');
            let mine_card = gameboard.mines[noMine].collection[0];
            if (card instanceof Bonus) {    // NE MARCHE PAS
                if (!this.pickerActionBonus(card, mine_card, noMine, gameboard)) { gameboard.recruitCenter.addCard(card); return; }   // on défausse le mineur
            }
            else if (card instanceof Enemy) { console.log('Je suis méchant!'); return; }
            else { console.log(`Carte ${mine_card.name} du type ${mine_card.typeName} non implémentée ;(`); return; }  
        }    
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


    private cardMineAction(card: Card, nMine: number, gameboard: GameBoard) {
        if (false) {}
        else if (false) {}
        else { 
            console.log(`Action pour la carte minée ${card.typeName} non implémentée ;(`); 
            console.log('La carte a été ajouté à la pile des cartes non utilisé (solution temporaire pour éviter les fuites).')
            gameboard.unUsedCards.addCard(card);
        }
    }
}