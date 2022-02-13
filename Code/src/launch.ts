import { Dwarf } from './Card/Dwarf'

//Je ne veux pas voir un seul "" car contrairement au '', il y a une interpretation par JS (=> donc execution plus longue)
console.log('Hello World !');
let carte1 = new Dwarf('Dwarf',5,0,false,false);
carte1.printCard();

