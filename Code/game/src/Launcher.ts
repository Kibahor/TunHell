import { InitializeDeck } from './Card/Factory/InitializeDeck';

//Je ne veux pas voir un seul "" car contrairement au '', il y a une interpretation par JS (=> donc execution plus longue)

let initDeck = new InitializeDeck('Default');
let deck = initDeck.generateDeck();
let i =0
for(let [type,card] of deck.entries()){
    console.debug(card);
    i+=card.length;
}
console.debug(i)



