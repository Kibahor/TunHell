import { Card } from "./Card/Card";
import { GameBoard } from "./GameBoard";
import readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
const util = require('util');
const question = util.promisify(rl.question).bind(rl);

export class Round{
    public gameboard:GameBoard;
    public selectedPlayer:number;

    public constructor(gameboard:GameBoard){
        this.gameboard=gameboard;
    }

    public async promptQuestion(sentence:string) : Promise<string> {
        try {
          const answer = await question(sentence);
          return answer;
        } catch (err) {
          console.error('Question rejected', err);
        }
    }

    public async doRound(){
        for(let i=1;i<this.gameboard.nbPlayers;i++){
            this.selectedPlayer=i;
            console.debug(`Player ${i} it is at you turn !`);
            let choice = await this.promptQuestion('Pick a Card or Play a Card ? (0/1) ');
            parseInt(choice) === 0 ? this.pickDwarf() : this.playCard();
        }
    }

    public pickDwarf():void{
        return;
    }

    private async playCard() {
        let player = this.gameboard.players[this.selectedPlayer];
        console.debug('Your Hand :', player.playerHand);
        let answer = await this.promptQuestion('What Card do you want to play ? (1 to 6) ');
        let noCard = parseInt(answer);
        if(!(noCard > 0 && noCard < 6)){
            this.playCard();
            return;
        }
        let noMines = parseInt(await this.promptQuestion(`In which mines do you want to place the card : ${player.playerHand.collection[noCard].name} ? (1 to ${player.mines.length})`));
        if(!(noMines > 0 && noMines < player.mines.length))
                player.moveCardToMine(noCard, noMines);
    }
    /*
    public playEffect(card:Card){
        if(card.typeName === 'Picker'){
            
        }
    }*/
}