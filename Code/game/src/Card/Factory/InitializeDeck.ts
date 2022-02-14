import { DwarfFactory } from './DwarfFactory';
import { Card } from '../Card';
const fs = require('fs');
const path = require('path');

export class InitializeDeck{
    private receipes:Map<string,JSON>;
    private cardFactory:DwarfFactory;
    private deckName:string = "Default";
    private path_json:string = path.resolve(path.join('./res','/Receipe/'));

    public constructor(){
        this.cardFactory = new DwarfFactory();
        this.receipes = new Map();
        console.log(this.path_json);
        for(let file of fs.readdirSync(this.path_json)){
            if(path.posix.extname(file) == '.json'){
                let key = path.posix.basename(file,'.json');
                let value = JSON.parse(fs.readFileSync(path.join(this.path_json,file)));
                this.receipes.set(key, value);
            }
        }
    }

    private generateDwarf():Array<Card>{
        let receipeDeck = this.receipes.get('Deck')[this.deckName]['Dwarf'];
        if(receipeDeck == null)
            throw new SyntaxError(`Le deck ${this.deckName} n'existe pas !`);
        let result:Array<Card> = [];
        for(let [typename,receipe] of Object.entries(receipeDeck)) {
            for(let [name, number] of Object.entries(receipe)){
                result=result.concat(this.cardFactory.CreateCard(typename, this.receipes.get(typename)[name], number));
            }
        }
        return result;
    }

    public generateDeck():Array<Card> {
        return this.generateDwarf();
    }
}

