import { DwarfFactory } from './DwarfFactory';
import { Card } from '../Card';
import { EnemyFactory } from './EnemyFactory';
const fs = require('fs');
const path = require('path');

export class InitializeDeck{
    private receipes:Map<string,JSON>;
    private deckName:string = "Default";
    private path_json:string = path.resolve(path.join('./res','/Receipe/'));
    private factoryMatch = { 
        "Dwarf": new DwarfFactory(),
        "Enemy": new EnemyFactory()
    };
    
    public constructor(){
        this.receipes = new Map();
        for(let file of fs.readdirSync(this.path_json)){
            if(path.posix.extname(file) == '.json'){
                let key = path.posix.basename(file,'.json');
                let value = JSON.parse(fs.readFileSync(path.join(this.path_json,file)));
                this.receipes.set(key, value);
            }
        }
    }    
    
    private createCard(factoryType:string, typename:string, receipe:JSON, number:number):Array<Card>{
        return this.factoryMatch[factoryType].CreateCard(typename,receipe,number);
    }

    public generateDeck():Array<Card>{
        let receipeDeck = this.receipes.get('Deck')[this.deckName];
        if(receipeDeck == null)
            throw new SyntaxError(`Le deck ${this.deckName} n'existe pas !`);
        let result:Array<Card> = [];
        for(let [factoryType,value] of Object.entries(receipeDeck)){ // "Dwarf" et {}
            for(let [typename,receipe] of Object.entries(value)) { // "Warrior" et {}
                for(let [name, number] of Object.entries(receipe)){ // "Warrior1" et 7
                    result=result.concat(this.createCard(factoryType, typename, this.receipes.get(typename)[name], number as number));
                }
            }
        }
        return result;
    }
}

