import { DwarfFactory } from './DwarfFactory';
import { Stack } from '../../Stack';
import { StackType } from '../../StackType';
import { Card } from '../Card';
const fs = require('fs');
const path = require('path');

export class InitializeDeck{
    private receipes:Map<string,Object>;
    private cardFactory:DwarfFactory;

    public constructor(){
        this.cardFactory = new DwarfFactory();
        this.receipes = new Map();
        //TODO : Au lieu de faire une map, faire un array qui concaténe toute les recettes
        //TODO : Faire un json Deck.json qui contient le type voulu avec le nombre voulu, pour chaque carte du jeu
        const path_json = __dirname+'/Receipe/'
        for(let file of fs.readdirSync(path_json)){
            if(path.posix.extname(file) == '.json'){
                this.receipes.set(path.posix.basename(file,'.json'), JSON.parse(fs.readFileSync(path_json+file)));
            }
        }
    }
    
    private generateWarrior(receipe):Array<Card>{
        return [].concat(
            this.cardFactory.CreateCard(receipe["Warrior1"],7),
            this.cardFactory.CreateCard(receipe["Warrior2"],5),
            this.cardFactory.CreateCard(receipe["Warrior3"],4),
            this.cardFactory.CreateCard(receipe["Warrior4"],1),
            this.cardFactory.CreateCard(receipe["Warrior5"],1)
        )
    }
    
    private generatePicker(receipe):Array<Card>{
        return [].concat(
            this.cardFactory.CreateCard(receipe["Picker1"],4),
            this.cardFactory.CreateCard(receipe["Picker2"],5),
            this.cardFactory.CreateCard(receipe["Picker3"],4),
            this.cardFactory.CreateCard(receipe["Picker4"],4),
            this.cardFactory.CreateCard(receipe["Picker5"],1),
            this.cardFactory.CreateCard(receipe["Picker6"],1)
        )

    }
    
    private generateScout(receipe):Array<Card>{
        return [].concat(
            this.cardFactory.CreateCard(receipe["Scout1"],2),
            this.cardFactory.CreateCard(receipe["Scout2"],3)
        );
    }
    
    private generateDwarf():Array<Card>{
        return [].concat(
            this.generateWarrior(this.receipes.get("Warrior")),
            this.generatePicker(this.receipes.get("Picker")),
            this.generateScout(this.receipes.get("Scout")),
            this.cardFactory.CreateCard(this.receipes.get("Blaster")["Blaster1"],2)
        );
    }

    public generateDeck():Array<Card> {
        return this.generateDwarf();
    }
}

