import { Card } from "./Card/Card";
import { GameBoard } from "./GameBoard";
import readline = require("readline");
import { Player } from "./Player";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

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
        /*while (true) {  // Compter le nombre de cartes restantes dans les mines (peut être une autre fin possible ?)
            this.doRound();
        }*/
        this.doRound();
    }

    private async doRound() {
        console.debug(`=======================================\n Turn ${this.turn} : Player ${this.selectedPlayer} it's you turn !\n=======================================`);
        rl.question('Pick a Card or Play a Card (0/1) ? ', (choice) => {
            let noChoice = parseInt(choice)
            switch (noChoice) {
                case 0:
                    this.recruitCard();
                    break;
                case 1:
                    this.playCard();
                    break;
                default:
                    this.doRound();
                    return;
            }
        });
        if (this.selectedPlayer < this.gameboard.nbPlayers) {
            this.selectedPlayer++;
        }
        else {
            console.log('The turn is over !');
            this.selectedPlayer = 1;
            this.turn++;
        }
    }

    private async recruitCard() {
        let player = this.gameboard.players[this.selectedPlayer-1];
        console.debug('Recruit Center:', this.gameboard.recruitCenter.toStringFirstFive());
        rl.question(`Which card do you want to pick (0 to ${this.gameboard.recruitCenter.lenghtMaxFive()-1}) ? `, (choice) => {
            let noCard = parseInt(choice);
            if (noCard >= 0 && noCard <= this.gameboard.recruitCenter.lenghtMaxFive()-1) {
                this.moveCardtoHand(player, noCard);
            }
            else {
                this.recruitCard();
                return;
            }
        });
    }

    private async playCard() {
        let player = this.gameboard.players[this.selectedPlayer-1];
        console.debug('Your Hand:', player.playerHand.toString());
        rl.question(`Which card do you want to play (0 to ${player.playerHand.collection.length-1}) ? `,(choice) => {
            let noCard = parseInt(choice);
            if (noCard >= 0 && noCard <= player.playerHand.collection.length-1) {
                this.moveCardtoMine(player, noCard)
            }
            else {
                this.playCard();
                return;
            }
        });
    }

    private moveCardtoHand(player: Player, noCard: number) : void {
        player.playerHand.moveCardToStack(this.gameboard.recruitCenter.collection[noCard], player.playerHand);
    }

    private async moveCardtoMine(player:Player, noCard:number) {
        rl.question(`In which mine do you want to place the card : ${player.playerHand.collection[noCard].name} (0 to ${this.gameboard.mines.length-1}) ? `,(choice) => {
            let noMines = parseInt(choice);
            if (noMines >= 0 && noMines <= this.gameboard.mines.length-1){
                player.moveCardToMine(noCard, noMines);
                console.log('Move done !');
            } 
            else {
                this.moveCardtoMine(player, noCard);
            }
        });
    }

    /*public playEffect(card:Card){
        if(card.typeName === 'Picker'){
            
        }
    }*/
}