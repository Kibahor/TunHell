const fs = require('fs');
const path = require('path');
const PATH_JSONS:string = path.resolve(__dirname,'../../../res/Receipe/');

function loadReceipes(map:Map<string,Map<string,JSON>>,folder:string){
    for(let file of fs.readdirSync(folder)){
        let path_file = path.join(folder,file);
        if(fs.lstatSync(path_file).isDirectory()){
            map = loadReceipes(map,path_file);
        }else if(path.extname(path_file) == '.json'){
            let directory = path.basename(path.dirname(path_file))
            let filename = path.basename(path_file,'.json');
            let value = JSON.parse(fs.readFileSync(path_file));
            if(!map.has(directory))
                map.set(directory, new Map().set(filename,value));
            else
                map.get(directory).set(filename,value)
        }
    }
    return map
}

export function json2map(json:JSON):Map<any,any>{
    return new Map(Object.entries(json))
}

export let receipes:Map<string,Map<string,JSON>> = loadReceipes(new Map(),PATH_JSONS); //Récursive d'où le new Map()
export function getDeck(deckName:string):JSON {
    return json2map(receipes.get('Receipe').get('Deck')).get(deckName); 
}