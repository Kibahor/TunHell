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
        this.addReceipes(this.path_json);
    }    

    private addReceipes(folder:string){
        for(let file of fs.readdirSync(folder)){
            let path_file = path.join(folder,file);
            if(fs.lstatSync(path_file).isDirectory()){
                this.addReceipes(path_file);
            }else if(path.posix.extname(path_file) == '.json'){
                let key = path.posix.basename(path_file,'.json');
                let value = JSON.parse(fs.readFileSync(path_file));
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

