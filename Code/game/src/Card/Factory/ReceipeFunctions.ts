const fs = require('fs');
const path = require('path');
const PATH_JSONS:string = path.resolve(path.join('./res','/Receipe/'));

function loadReceipes(map:Map<string,JSON>,folder:string){
    for(let file of fs.readdirSync(folder)){
        let path_file = path.join(folder,file);
        if(fs.lstatSync(path_file).isDirectory()){
            map=loadReceipes(map,path_file);
        }else if(path.extname(path_file) == '.json'){
            let key = path.basename(path_file,'.json');
            let value = JSON.parse(fs.readFileSync(path_file));
            map.set(key, value);
        }
    }
    return map
}

export function sortReceipes(receipes:Map<string,JSON>,deck:JSON):Map<string,Map<string,JSON>>{
    let result = new Map();
    for(let [factoryType,type] of Object.entries(deck)){ // "Warrior" et {}
      for(let [name,number] of Object.entries(type)){
        if (!result.has(factoryType))
            result.set(factoryType,new Map([[name,receipes.get(name)]]))
        else
            result.get(factoryType).set(name,receipes.get(name))
      }
    }
    return result;
}

export let receipes:Map<string,JSON> = loadReceipes(new Map(),PATH_JSONS); //Récursive d'où le new Map()
export function getDeck(deckName:string):JSON {
    return receipes.get('Deck')[deckName]; 
}