import { DwarfFactory } from './DwarfFactory';
import { Card } from '../Card';
import { EnemyFactory } from './EnemyFactory';
import { receipes, sortReceipes, getDeck  } from './ReceipeFunctions';

export class InitializeDeck{
    private receipes:Map<string,Map<string,JSON>>;
    private deck:JSON;
    private factoryMatch = { 
        "Dwarf": new DwarfFactory(),
        "Enemy": new EnemyFactory()
    };

    public constructor(deckName:string){
        this.deck=getDeck(deckName);
        this.receipes = sortReceipes(receipes,this.deck);
    }
    
    private createCard(factoryType:string, typename:string, receipe:JSON, number:number):Array<Card>{
        return this.factoryMatch[factoryType].CreateCard(typename,receipe,number);
    }

    public generateDeck():Array<Card>{
        let result:Array<Card> = [];
        for(let [factoryType,value] of Object.entries(this.deck)){ // "Dwarf" et {}
            for(let [typename,receipe] of Object.entries(value)) { // "Warrior" et {}
                for(let [name, number] of Object.entries(receipe)){ // "Warrior1" et 7
                    result=result.concat(this.createCard(factoryType, typename, this.receipes.get(factoryType).get(typename)[name], number as number));
                }
            }
        }
        return result;
    }
}

