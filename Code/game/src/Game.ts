import { GameBoard } from "./GameBoard";
import { Player } from "./Player";
import { Card } from "./Card/Card";
import readline = require("readline");
import { exit } from "process";
import { Dwarf } from "./Card/Dwarf";


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
        console.debug(`=======================================\n Turn ${this.turn} : Player ${this.selectedPlayer} it is at you turn !\n=======================================`);
        let choice = await this.prompt('Pick a Card or Play a Card (0/1) ? ');
        switch (choice) {
            case 0:
                await this.recruitCard();
                break;
            case 1:
               await this.playCard();
                break;
            default:
                this.gameboard.comptAllCards();     // Debug
                this.doRound();
                return;
        }
        //Pour chaque carte du joueur sur chaque mine
        for(let cards_mine of this.gameboard.players[this.selectedPlayer].mines){
            for(let card of cards_mine.collection){
                this.cardAction(card);
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
        console.debug('Recruit Center:', this.gameboard.recruitCenter.toStringFirst(5));
        let noCard = await this.prompt(`Which Card do you want to pick (0 to ${this.gameboard.recruitCenter.lenghtMaxFive()-1}) ? `);
        if (noCard >= 0 && noCard <= this.gameboard.recruitCenter.lenghtMaxFive()-1) {
            this.gameboard.recruitCenter.moveCardToStack(this.gameboard.recruitCenter.collection[noCard], player.playerHand );
            console.log('Done !')
        } 
        else {
           await this.recruitCard();
            return;
        }
    }

    private async playCard() {
        let player = this.gameboard.players[this.selectedPlayer-1];
        console.debug('Your Hand:', player.playerHand.toString());
        let noCard = await this.prompt(`What Card do you want to play (0 to ${player.playerHand.collection.length-1}) ? `);
        if (noCard >= 0 && noCard <= player.playerHand.collection.length-1) {
            await this.moveCardtoMine(player, noCard)
        }
        else {
            await this.playCard();
            return;
        }
    }

    private async moveCardtoMine(player:Player, noCard:number) {
        let noMines = await this.prompt(`In which mine do you want to place the card : ${player.playerHand.collection[noCard].name} (0 to ${this.gameboard.mines.length-1}) ? `);
        if (noMines >= 0 && noMines <= this.gameboard.mines.length-1){
            player.moveCardToMine(noCard, noMines);
            console.log('Move done !');
        } 
        else {
           await this.moveCardtoMine(player, noCard);
        }
    }

    private async prompt(question_str:string) {
        const answer = await question(question_str);
        let noChoice = parseInt(answer);
        return noChoice;
    }

    private blast(blaster: Card, nMine: number) : void {
        for (let i=1; i < this.gameboard.nbPlayers; i++) {
            let mine = this.gameboard.players[i].mines[nMine];
            for (let card of mine.collection) {
                if (card.typeName === "Warrior") {
                    this.gameboard.recruitCenter.addCard(card);
                    mine.removeCard(card);
                }
            }
        }
        this.gameboard.mines[nMine].removeCard(blaster);
        this.gameboard.recruitCenter.addCard(blaster);
    }

    private scout(scout: Card, nMine: number) : void {
        console.log(this.gameboard.mines[nMine].toStringFirst((scout as Dwarf).first_value));
        this.gameboard.mines[nMine].removeCard(scout);
        this.gameboard.recruitCenter.addCard(scout);
    }

    private cardAction(card:Card){
        if (card.typeName === 'picker') this.pickerAction(card,1);
        else console.log(`action pour la carte ${card.typeName} non implémenter`)
    }

    private pickerAction(card:Card, mine_nb:number){
        //for nb valeur picker
        let mine_card = this.gameboard.mines[mine_nb].collection.shift();
        console.log(`the picker "${card.name}" has mined a "${mine_card.name}" in the mine ${mine_nb}`);
        exit();
    }

}