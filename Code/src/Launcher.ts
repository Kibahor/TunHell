import { Dwarf } from './Card/Dwarf'
import { Card } from './Card/Card'
import { DwarfFactory } from './Card/DwarfFactory';
const fs = require('fs');

//Je ne veux pas voir un seul "" car contrairement au '', il y a une interpretation par JS (=> donc execution plus longue)
console.log('Hello World !');
let carte1 = new Dwarf('Dwarf',5,0,false,false);
carte1.printCard();
let warrior = `{
    "Warrior1":{
      "name":"Warrior1",
      "first_value":5,
      "second_value":4,
      "up_symbol":false,
      "stop_symbol":false
    },
    "Warrior2":{
      "name":"Warrior2",
      "first_value":7,
      "second_value":0,
      "up_symbol":true,
      "stop_symbol":false 
    }
}`
//console.log(JSON.parse(fs.readFileSync('./Card/Receipe/test1.json')))
let parseWarrior = JSON.parse(warrior)
let cardFactory = new DwarfFactory();
let result:Array<Card> = cardFactory.CreateCard(parseWarrior["Warrior1"],3)
for(let card of result) {
    card.printCard();
}


