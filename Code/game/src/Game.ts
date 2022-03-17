import { GameBoard } from "./GameBoard";
import { Player } from "./Player";
import { Card } from "./Card/Card";
import { Dwarf } from "./Card/Dwarf";
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

    public constructor(gameboard: GameBoard){
        this.gameboard = gameboard;
        this.selectedPlayer = 1;
        this.turn = 1;
    }

    public playGame() : void {
        this.doRound();
    }
    
    private async doRound() {
        this.gameboard.comptAllCards();
        console.debug(`=======================================\n Turn ${this.turn} : Player ${this.selectedPlayer} it is at you turn !\n=======================================`);
        this.gameboard.players[this.selectedPlayer-1].promptHand();
        let choice = await this.prompt('Pick a Card or Play a Card (1/2) ? ');
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

        // Attention !!
        for (let [index, cards_mine] of this.gameboard.players[this.selectedPlayer-1].mines.entries()) {
            for (let card of cards_mine.collection) {
                this.cardAction(card, index);
            }
        }

        if (this.selectedPlayer < this.gameboard.nbPlayers) {
            this.selectedPlayer++;
        }
        else {
            console.log('The turn is over !');
            this.selectedPlayer = 1;
            this.turn++;
        }
        this.doRound();
    }

    private async recruitCard() {
        let player = this.gameboard.players[this.selectedPlayer-1];
        if (player.playerHand.collection.length >= 6) {
            console.log('You have already 6 cards in your hand !'); 
            await this.playCard();
            return;
        }
        console.debug('Recruit Center:', this.gameboard.recruitCenter.toStringFirst(5));
        let noCard = await this.prompt(`Which Card do you want to pick (1 to ${this.gameboard.recruitCenter.lenghtMaxFive()}) ? `);
        if (noCard > 0 && noCard <= this.gameboard.recruitCenter.lenghtMaxFive()) {
            this.gameboard.recruitCenter.moveCardToStack(this.gameboard.recruitCenter.collection[noCard], player.playerHand );
            console.log('Done !')
        } 
        else {
            await this.recruitCard();
            return;
        }
    }

    private async playCard() {
        let player = this.gameboard.players[this.selectedPlayer-1];     // A approfondir !!
        if (player.playerHand.collection.length == 0) {                 // Ne prend pas en compte le fais que le joueur peut avoir des cartes non jouables dans sa main !!
            console.log('You have no card in your hand !');
            await this.recruitCard();
            return;
        }
        let noCard = await this.prompt(`What Card do you want to play (1 to ${player.playerHand.collection.length}) ? `);
        if (noCard > 0 && noCard <= player.playerHand.collection.length) {
            await this.moveCardtoMine(player, noCard)
        }
        else {
            await this.playCard();
            return;
        }
    }

    private async moveCardtoMine(player: Player, noCard: number) {
        let noMines = await this.prompt(`In which mine do you want to place the card : ${player.playerHand.collection[noCard].name} (1 to ${this.gameboard.mines.length}) ? `);
        if (noMines > 0 && noMines <= this.gameboard.mines.length) {
            player.moveCardToMine(noCard, noMines);
            console.log('Move done !');
        } 
        else {
            await this.moveCardtoMine(player, noCard);
        }
    }

    private async prompt(question_str: string) {
        const answer = await question(question_str);
        let noChoice = parseInt(answer);
        return noChoice;
    }

    private cardAction(card: Card, noMine: number) : void {
        if (card.typeName === 'Blast') { this.blasterAction(card, noMine); }
        else if (card.typeName === 'Scout') { this.scoutAction(card, noMine); }
        else if (card.typeName === 'Picker') { this.pickerAction(card, noMine); }
        //else if (card.typeName === 'Warrior') { this.warriorAction(card, noMine); }
        else { console.log(`Action pour la carte ${card.typeName} non implémentée ;(`); }
    }

    private blasterAction(blaster: Card, noMine: number) : void {
        for (let i=1; i < this.gameboard.nbPlayers; i++) {
            let mine = this.gameboard.players[i].mines[noMine];
            for (let card of mine.collection) {
                if (card.typeName === "Warrior") {
                    this.gameboard.recruitCenter.addCard(card);
                    mine.removeCard(card);
                }
            }
        }
        this.gameboard.mines[noMine].removeCard(blaster);
        this.gameboard.recruitCenter.addCard(blaster);
    }

    private scoutAction(scout: Card, noMine: number) : void {
        console.log(this.gameboard.mines[noMine].toStringFirst((scout as Dwarf).first_value));
        this.gameboard.mines[noMine].removeCard(scout);
        this.gameboard.recruitCenter.addCard(scout);
    }

    private pickerAction(card:Card, noMine: number) : void {   
        let mine_card = this.gameboard.mines[noMine].collection.shift();       //for nb valeur picker
        console.log(`The picker "${card.name}" has mined a "${mine_card.name}" in the mine ${noMine}!`);
        this.cardMineAction(mine_card, noMine)
    }

    private warriorAction(card: Card, nMine: number) : void {
        // . . .
    }

    private cardMineAction(card: Card, nMine: number) {
        if (false) {}
        else if (false) {}
        else { 
            console.log(`Action pour la carte minée ${card.typeName} non implémentée ;(`); 
            console.log('La carte a été ajouté à la pile des cartes non utilisé (solution temporaire pour éviter les fuites).')
            this.gameboard.unUsedCards.addCard(card);
        }
    }
}