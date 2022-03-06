import { Card } from './Card/Card';
import { InitializeDeck } from './Card/Factory/InitializeDeck';
import { GameBoard } from './GameBoard';

//Je ne veux pas voir un seul "" car contrairement au '', il y a une interpretation par JS (=> donc execution plus longue)

let initDeck = new InitializeDeck('Default');
let deck = initDeck.generateDeck();

//A METTRE DANS GAMEBOARD
import { Treasure } from './Card/Treasure';
import { Game } from './Game';

let end_mine: Array<Card> = [];
let trophy: Array<Card> = [];
for (let [type,cards] of deck.entries()) {
    for(let card of [].concat(cards)) {
        //est une fin de mine
        if (card.end_mine) {
            end_mine.push(card);
            let tab = deck.get(type);
            tab.splice(tab.indexOf(card),1)
        } else if(card.typeName === 'Treasure') { //est un trophée
            if ((card as Treasure).trophy) {
                trophy.push(card);
                let tab=deck.get(type);
                tab.splice(tab.indexOf(card),1);
            }
        }
    }
}

if (true) {
    //Vérifie le compte
    let i = 0
    for (let [type,card] of deck.entries()) {
        console.debug(type,card.length);
        i+=card.length;
    }
    console.debug('End_mine',end_mine.length);
    console.debug('Trophy',trophy.length);
    console.debug(i+end_mine.length+trophy.length);
}

////////////////////////////////////////////////////////////////////////////////////////

//Gameboard doit accepter qu'un seul array de carte et c'est deck
//let game:GameBoard = new GameBoard(0,4,deck)
let gameboard : GameBoard = new GameBoard(0, 4, deck.get('Dwarf'), deck.get('Enemy').concat(deck.get('Bonus')).concat(deck.get('Treasure')), end_mine, trophy);
gameboard.comptAllCards();
let game = new Game(gameboard);
game.playGame();