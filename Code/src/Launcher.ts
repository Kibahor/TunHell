import { Dwarf } from './Card/Dwarf'
import { Card } from './Card/Card'
import { DwarfFactory } from './Card/DwarfFactory';
import { Stack } from './Stack';
import { StackType } from './StackType';
const fs = require('fs');

//Je ne veux pas voir un seul "" car contrairement au '', il y a une interpretation par JS (=> donc execution plus longue)
/*console.log('Hello World !');
let carte1 = new Dwarf('Dwarf',5,0,false,false);
carte1.printCard();*/

const WARRIOR = `{
    "Warrior1":{
      "first_value":1,
      "second_value":0,
      "up_symbol":true,
      "stop_symbol":false
    },
    "Warrior2":{
      "first_value":2,
      "second_value":0,
      "up_symbol":false,
      "stop_symbol":false 
    },
    "Warrior3":{
      "first_value":3,
      "second_value":0,
      "up_symbol":false,
      "stop_symbol":false 
    },
    "Warrior4":{
        "first_value":4,
        "second_value":0,
        "up_symbol":false,
        "stop_symbol":true 
    },
    "Warrior5":{
        "first_value":5,
        "second_value":0,
        "up_symbol":false,
        "stop_symbol":true 
    }
}`

const PICKER = `{
    "Picker1":{
      "first_value":2,
      "second_value":0,
      "up_symbol":true,
      "stop_symbol":false
    },
    "Picker2":{
      "first_value":1,
      "second_value":2,
      "up_symbol":false,
      "stop_symbol":false 
    },
    "Picker3":{
      "first_value":2,
      "second_value":1,
      "up_symbol":false,
      "stop_symbol":false 
    },
    "Picker4":{
        "first_value":3,
        "second_value":0,
        "up_symbol":false,
        "stop_symbol":false
    },
    "Picker5":{
        "first_value":4,
        "second_value":3,
        "up_symbol":false,
        "stop_symbol":false
    },
    "Picker6":{
        "first_value":2,
        "second_value":5,
        "up_symbol":false,
        "stop_symbol":false
    }
}`

const SCOUT = `{
    "Scout1":{
      "first_value":5,
      "second_value":0,
      "up_symbol":false,
      "stop_symbol":false
    },    
    "Scout2":{
        "first_value":3,
        "second_value":0,
        "up_symbol":true,
        "stop_symbol":false
    }
}`

const BLASTER = `{
    "Blaster1":{
        "first_value":0,
        "second_value":0,
        "up_symbol":false,
        "stop_symbol":false
    }
}`

//Sa va dans une classe après
function generateWarrior(receipe:JSON){
    let cardFactory = new DwarfFactory();
    let cards:Stack = new Stack('Warrior',StackType.Create);
    //Warriors
    cards.addCollection(cardFactory.CreateCard(receipe["Warrior1"],7));
    cards.addCollection(cardFactory.CreateCard(receipe["Warrior2"],5));
    cards.addCollection(cardFactory.CreateCard(receipe["Warrior3"],4));
    cards.addCard(cardFactory.CreateCard(receipe["Warrior4"],1)[0]);
    cards.addCard(cardFactory.CreateCard(receipe["Warrior5"],1)[0]);

    return cards;
}

function generatePicker(receipe:JSON){
    let cardFactory = new DwarfFactory();
    let cards:Stack = new Stack('Picker',StackType.Create);

    cards.addCollection(cardFactory.CreateCard(receipe["Picker1"],4));
    cards.addCollection(cardFactory.CreateCard(receipe["Picker2"],5));
    cards.addCollection(cardFactory.CreateCard(receipe["Picker3"],4));
    cards.addCollection(cardFactory.CreateCard(receipe["Picker4"],4));
    cards.addCard(cardFactory.CreateCard(receipe["Picker5"],1)[0]);
    cards.addCard(cardFactory.CreateCard(receipe["Picker6"],1)[0]);

    return cards;
}

function generateScout(receipe:JSON):Stack{
    let cardFactory = new DwarfFactory();
    let cards:Stack = new Stack('Scout',StackType.Create);

    cards.addCollection(cardFactory.CreateCard(receipe["Scout1"],2));
    cards.addCollection(cardFactory.CreateCard(receipe["Scout2"],3));

    return cards;
}

function generateDwarf(warrior:JSON, picker:JSON, scout:JSON, blaster:JSON):Stack{
    let cardFactory = new DwarfFactory();
    let cards:Stack = new Stack('Dwarf',StackType.Create);

    cards.addCollection(generateWarrior(warrior).collection);
    cards.addCollection(generatePicker(picker).collection);
    cards.addCollection(generateScout(scout).collection);
    cards.addCollection(cardFactory.CreateCard(blaster,2));

    return cards;
}

//console.log(JSON.parse(fs.readFileSync('./Card/Receipe/test1.json')))
let cardStack:Stack = generateDwarf(JSON.parse(WARRIOR),JSON.parse(PICKER),JSON.parse(SCOUT),JSON.parse(BLASTER))
console.log(cardStack);



