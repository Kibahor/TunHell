import { InitializeDeck } from './Card/Factory/InitializeDeck';
const fs = require('fs');

//Je ne veux pas voir un seul "" car contrairement au '', il y a une interpretation par JS (=> donc execution plus longue)

//TODO : Il doit prendre en parametre le nom du deck voulu
let initDeck = new InitializeDeck();

for(let card of initDeck.generateDeck()){
    console.log(card);
}




