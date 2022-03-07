import { DwarfFactory } from './DwarfFactory';
import { Card } from '../Card';
import { EnemyFactory } from './EnemyFactory';
import { receipes, getDeck, json2map  } from './ReceipeFunctions';
import { BonusFactory } from './BonusFactory';
import { TreasureFactory } from './TreasureFactory';

export class InitializeDeck{
    private deck:JSON;
    private factoryMatch = { 
        "Dwarf": new DwarfFactory(),
        "Enemy": new EnemyFactory(),
        "Treasure": new TreasureFactory(),
        "Bonus": new BonusFactory(),
    };

    public constructor(deckName:string){
        this.deck = getDeck(deckName);
    }
    
    private createCard(factoryType:string, name:string, receipe:JSON, number:number):Array<Card>{
        return this.factoryMatch[factoryType].CreateCard(name,factoryType,receipe,number);
    }

    private getReceipe(stackName,typename,name):JSON{
        return json2map(receipes.get(stackName).get(typename)).get(name)
    }

    public generateDeck():Map<string,Array<Card>>{
        let result:Map<string,Array<Card>> = new Map();
        for(let [stackName,stackNameContent] of Object.entries(this.deck)){ // "Dwarf" et JSON (nom dossier)
            for(let [factoryType,factoryTypeContent] of Object.entries(stackNameContent)) { // "Dwarf" et JSON (type de la carte)
                for(let [typeName,typeNameContent] of Object.entries(factoryTypeContent)){ //"Warrior" et JSON (nom du json)
                    for(let [name, number] of Object.entries(typeNameContent)){ // "Warrior1" et 7 (nom de la carte + nombre voulu)
                        let cards:Card[] = this.createCard(factoryType, name, this.getReceipe(stackName,typeName,name), number as number);   
                        if(result.has(stackName))
                            cards=result.get(stackName).concat(cards)
                        result.set(stackName,cards)
                    }
                }
            }
        }
        return result;
    }
}