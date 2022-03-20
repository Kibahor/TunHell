import { GameBoard } from "./GameBoard";
import { Player } from "./Player";

import { Card } from "../Card/Card";

import { Blaster } from "../Action/Blaster";
import { Dwarf } from "../Card/Dwarf";
import { Picker } from "../Action/Picker";
import { Scout } from "../Action/Scout";

import { debugValue } from "../Launcher";

import readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const util = require('util');
const question = util.promisify(rl.question).bind(rl);

export class Game {
    public gameboard : GameBoard;
    public selectedPlayer : number;
    public turn : number;

    private scout: Scout;
    private blaster: Blaster;
    private picker: Picker;

    public constructor(gameboard: GameBoard){
        this.gameboard = gameboard;
        this.selectedPlayer = 1;
        this.turn = 1;

        this.scout = new Scout();
        this.blaster = new Blaster();
        this.picker = new Picker();
    }

    public playGame() : void {
        this.doRound();
    }
    
    private async doRound() {
        // Rajouter la condition d'arrêt de la partie
        if (debugValue) { this.gameboard.showAllCards(); }
        if (debugValue) { this.gameboard.comptAllCards(); }

        console.debug(`\n=====================================\n| Turn ${this.turn}: Player ${this.selectedPlayer}, it's your turn! |\n=====================================`);
        this.gameboard.players[this.selectedPlayer-1].promptHand();

        let choice = await this.prompt('Pick a Card or Play a Card (1/2)? ');
        switch (choice) {
            case 1:
                await this.recruitCard();
                break;
            case 2:
                await this.playCard();
                break;
            default:
                this.doRound();
                return;
        }

        if (debugValue) { console.log('[DEBUG] Primary choice done!'); }

        for (let [index, cards_mine] of this.gameboard.players[this.selectedPlayer-1].mines.entries()) {
            for (let card of cards_mine.collection) {
                if (debugValue) { console.log(`[DEBUG] Action going on for ${card.name}`); }
                this.cardAction(card, index);   // ne traitera que les piocheurs
            }
        }

        if (this.selectedPlayer < this.gameboard.nbPlayers) {
            this.selectedPlayer++;
        }
        else {
            console.log('The turn is over!\n');
            this.selectedPlayer = 1;
            this.turn++;
        }
        this.doRound();
    }

    private async recruitCard() {
        let player = this.gameboard.players[this.selectedPlayer-1];
        if (player.playerHand.collection.length >= 6) {
            console.log('You have already 6 cards in your hand!'); 
            await this.playCard();
            return;
        }
        console.debug('Recruit Center:', this.gameboard.recruitCenter.toStringFirst(5));
        let noCard = await this.prompt(`Which Card do you want to pick (1 to ${this.gameboard.recruitCenter.lenghtMaxFive()})? `);
        if (noCard > 0 && noCard <= this.gameboard.recruitCenter.lenghtMaxFive()) {
            console.log(`You choose the ${this.gameboard.recruitCenter.collection[noCard-1].name}!\n`)
            this.gameboard.recruitCenter.moveCardToStack(this.gameboard.recruitCenter.collection[noCard-1], player.playerHand );
        } 
        else {
            await this.recruitCard();
            return;
        }
    }

    private async playCard() {                                          // Peut boucler à l'infini si le joueur ne peux jouer que des piocheurs (après il fait pas d'effort quoi ..)
        let player = this.gameboard.players[this.selectedPlayer-1];     
        if (player.playerHand.collection.length == 0) {                 // Ne prend pas en compte le fais que le joueur peut avoir des cartes non jouables dans sa main !!
            console.log('You have no card in your hand!');
            await this.recruitCard();
            return;
        }
        let noCard = await this.prompt(`Whitch Card do you want to play (1 to ${player.playerHand.collection.length})? `);
        if (noCard > 0 && noCard <= player.playerHand.collection.length) {
            let card = player.playerHand.collection[noCard-1];
            if (card.typeName == 'Picker') {
                if (!this.isPossible(this.selectedPlayer-1, 0) && !this.isPossible(this.selectedPlayer-1, 1) && !this.isPossible(this.selectedPlayer-1, 2)) {
                    console.log(`You shouldn't place the card ${card.name} in any mine because you haven't enough "warriors power"!`);
                    await this.playCard();
                    return;
                }
            }
            await this.moveCardtoMine(player, noCard-1);        
        }
        else {
            await this.playCard();
            return;
        }
    }

    private async moveCardtoMine(player: Player, noCard: number) {
        let noMines = await this.prompt(`In which mine do you want to place the card ${player.playerHand.collection[noCard].name} (1 to ${this.gameboard.mines.length})? `);
        if (noMines > 0 && noMines <= this.gameboard.mines.length) {
            let card = player.playerHand.collection[noCard];
            if (card.typeName == 'Picker') {
                if (!this.isPossible(this.selectedPlayer-1, noMines-1)) { 
                    console.log(`You shouldn't place the card ${card.name} in the mine n°${noMines} because you haven't enough "warriors power"!`);
                    await this.moveCardtoMine(player, noCard);
                    return;
                } 
            }
            console.log(`The ${player.playerHand.collection[noCard].name} has been moved to the mine n°${noMines}\n`);
            player.moveCardToMine(noCard, noMines-1);
        } 
        else {
            await this.moveCardtoMine(player, noCard);
        }
    }

    private isPossible(player: number, noMine: number) : boolean {
        let combatValuePlayer: number = this.picker.combatValue(player, noMine, this.gameboard);
        for (let i=0; i < this.gameboard.nbPlayers; i++) {
            if (combatValuePlayer < this.picker.combatValue(i, noMine, this.gameboard)) {
                return false;
            }
        }
        return true;
    }

    private async prompt(question_str: string) {
        const answer = await question(question_str);
        let noChoice = parseInt(answer);
        return noChoice;
    }

    private cardAction(card: Card, noMine: number) : void {
        let cardTypeName = card.typeName;
        switch (cardTypeName) {
            case 'Blaster':
                this.blaster.blasterAction(card, noMine, this.gameboard, this.selectedPlayer-1);
                break;
            case 'Scout':
                this.scout.scoutAction(card, noMine, this.gameboard, this.selectedPlayer-1);
                break;
            case 'Picker':
                this.picker.pickerAction(card, noMine, this.gameboard, this.selectedPlayer-1);
                break;
            case 'Warrior':
                break;
            default:
                console.log(`Action of the card ${card.typeName} not implemented ;(`);
                console.log('The card has been add to the unUsedCard stack (temporary solution)');
                this.gameboard.unUsedCards.addCard(card);
                this.gameboard.players[this.selectedPlayer-1].mines[noMine].removeCard(card);
        }
    }
}