import { Card } from './Card'
import { CardWithBonus } from './CardWithBonus'
import { CardType } from './CardType'
import { SubType } from './SubType';


//Je ne veux pas voir un seul "" car contrairement au '', il y a une interpretation par JS (=> donc execution plus longue)
console.log('Hello World !');
console.log(CardType.NAIN);
let carte1 = new Card('Nain1',CardType.NAIN,SubType.GUERRIER,12,false,false);
carte1.printCard();
let carte2 = new CardWithBonus('Piocheur1',CardType.NAIN,SubType.PIOCHEUR,2,5,true,false);
carte2.printCard();