import { DwarfFactory } from './DwarfFactory';
import { Card } from '../Card';
import { EnemyFactory } from './EnemyFactory';
import { receipes, sortReceipes, getDeck  } from './ReceipeFunctions';
import { BonusFactory } from './BonusFactory';
import { TreasureFactory } from './TreasureFactory';
import { Treasure } from '../Treasure';

export class InitializeDeck{
    private receipes:Map<string,Map<string,JSON>>;
    private deck:JSON;
    private factoryMatch = { 
        "Dwarf": new DwarfFactory(),
        "Enemy": new EnemyFactory(),
        "Treasure": new TreasureFactory(),
        "Bonus": new BonusFactory(),
    };

    public constructor(deckName:string){
        this.deck = getDeck(deckName);
        this.receipes = sortReceipes(receipes,this.deck);
    }
    
    private createCard(factoryType:string, name:string, receipe:JSON, number:number):Array<Card>{
        return this.factoryMatch[factoryType].CreateCard(name,factoryType,receipe,number);
    }

    public generateDeck():Map<string,Array<Card>>{
        let result:Map<string,Array<Card>> = new Map();
        for(let [factoryType,value] of Object.entries(this.deck)){ // "Dwarf" et {}
            for(let [typename,receipe] of Object.entries(value)) { // "Warrior" et {}
                for(let [name, number] of Object.entries(receipe)){ // "Warrior1" et 7
                    let cards:Card[] = this.createCard(factoryType, name, this.receipes.get(factoryType).get(typename)[name], number as number);   
                    if(result.has(factoryType))
                        cards=result.get(factoryType).concat(cards)
                    result.set(factoryType,cards)
                }
            }
        }
        return this.pickEndMineAndTrophy(result);
    }

    private pickEndMineAndTrophy(deck:Map<string,Array<Card>>):Map<string,Array<Card>>{
        deck.set('End_Mine',[]);
        deck.set('Trophy',[]);
        for (let [type,cards] of deck.entries()) {
            for(let card of [].concat(cards)) {
                //est une fin de mine
                if (card.end_mine) {
                    deck.get('End_Mine').push(card);
                    let tab = deck.get(type);
                    tab.splice(tab.indexOf(card),1)
                } else if(card.typeName === 'Treasure') { //est un trophée
                    if ((card as Treasure).trophy) {
                        deck.get('Trophy').push(card);
                        let tab=deck.get(type);
                        tab.splice(tab.indexOf(card),1);
                    }
                }
            }
        }
        return deck;
    }
}