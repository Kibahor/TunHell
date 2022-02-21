import { InitializeDeck } from './Card/Factory/InitializeDeck';

//Je ne veux pas voir un seul "" car contrairement au '', il y a une interpretation par JS (=> donc execution plus longue)

let initDeck = new InitializeDeck('Default');
let deck = initDeck.generateDeck();
console.debug(deck.length)
for(let card of deck){
    console.debug(card);
}




