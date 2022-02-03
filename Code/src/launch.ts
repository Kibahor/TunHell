import { Card } from './Card'
import { CardWithBonus } from './CardWithBonus'
import { CardType } from './CardType'


//Je ne veux pas voir un seul "" car contrairement au '', il y a une interpretation par JS (=> donc execution plus longue)
console.log('Hello World !');
console.log(CardType.DWARF);
let carte1 = new Card('Nain1',CardType.DWARF,12,false,false);
carte1.printCard();
let carte2 = new CardWithBonus('Piocheur1',CardType.DWARF,2,5,true,false);
carte2.printCard();