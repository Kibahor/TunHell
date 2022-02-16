const fs = require('fs');
const path = require('path');

function loadReceipes(map:Map<string,JSON>,folder:string){
    for(let file of fs.readdirSync(folder)){
        let path_file = path.join(folder,file);
        if(fs.lstatSync(path_file).isDirectory()){
            map=loadReceipes(map,path_file);
        }else if(path.posix.extname(path_file) == '.json'){
            let key = path.posix.basename(path_file,'.json');
            let value = JSON.parse(fs.readFileSync(path_file));
            map.set(key, value);
        }
    }
    return map
}

function sortReceipes(receipes:Map<string,JSON>,deckName:string):Map<string,JSON>{
    let result = new Map();
    for(let [factoryType,type] of Object.entries(receipes.get('Deck')[deckName])){ // "Warrior" et {}
      for(let [name,number] of Object.entries(type)){
        let toAdd = receipes.get(name) //Ajout le type (Warrior, Picker...)
        if (!result.has(factoryType))
            result.set(factoryType,[toAdd])
        else
            result.get(factoryType).push(toAdd)
      }
    }
    return result;
}

let path_json:string = path.resolve(path.join('./res','/Receipe/'));
let receipes:Map<string,JSON> = new Map();
receipes = loadReceipes(receipes,path_json);
console.log(receipes)
receipes = sortReceipes(receipes,'Default');
console.log(receipes)
//Dwarf
let receipesDwarf = receipes.get('Dwarf')
console.log(receipesDwarf)

describe(`check type of value for Dwarf cards`, () => {
  for(let [type,name] of Object.entries(receipesDwarf)){
    describe(`Check type of value for ${type}`, () => {
      for(let [value,receipe]of Object.entries(name)){
        it(`Type are correct for ${value}`, () =>{
          expect(typeof receipe['first_value']).toBe('number'); //first_value should be number
          expect(typeof receipe['second_value']).toBe('number'); //second_value should be number
          expect(typeof receipe['up_symbol']).toBe('boolean'); //up_symbol should be boolean
          expect(typeof receipe['stop_symbol']).toBe('boolean'); //stop_symbol should be boolean
        });
      }
    });
  }
});


/*
function assertSymbole(receipe:JSON):void {
  if ((receipe['up_symbol'] && receipe['stop_symbol']) === true)
      throw "Invalid logic : une carte peut pas avoir les deux symboles en même temps"
}

function assertValueAndSymbole(receipe:JSON):void {
  if (
      (receipe['first_value'] > 0 && receipe['second_value'] > 0) &&
      (receipe['up_symbol'] || receipe['stop_symbol'])
  ) throw 'Invalid logic : si une carte a deux valeurs, il ne peut pas avoir de symboles !';
}*/



