import {Carte} from './Carte'
import {CarteWithBonus} from './CarteWIthBonus'
import {TypeCarte} from './TypeCarte'
import { TypeNain } from './TypeNain';


//Je ne veux pas voir un seul "" car contrairement au '', il y a une interpretation par JS (=> donc execution plus longue)
console.log('Hello World !');
console.log(TypeCarte.NAIN);
let carte1=new Carte('Nain1',TypeCarte.NAIN,TypeNain.GUERRIER,12,false,false);
carte1.printCarte();
let carte2=new CarteWithBonus('Piocheur1',TypeCarte.NAIN,TypeNain.PIOCHEUR,2,5,true,false);
carte2.printCarte();