const fs = require('fs');
const path = require('path');

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

function sortReceipes(receipes:Map<string,JSON>,deckName:string):Map<string,Map<string,JSON>>{
    let result = new Map();
    for(let [factoryType,type] of Object.entries(receipes.get('Deck')[deckName])){ // "Warrior" et {}
      for(let [name,number] of Object.entries(type)){
        if (!result.has(factoryType))
            result.set(factoryType,new Map([[name,receipes.get(name)]]))
        else
            result.get(factoryType).set(name,receipes.get(name))
      }
    }
    return result;
}

let path_json:string = path.resolve(path.join('./res','/Receipe/'));
let receipes:Map<string,JSON> = loadReceipes(new Map(),path_json); //Récursive d'où le new Map()
let sortedReceipes:Map<string,Map<string,JSON>> = sortReceipes(receipes,'Default');

//Dwarf
let receipesDwarf:Map<string,JSON> = sortedReceipes.get('Dwarf')
describe(`Check Dwarf cards`, () => {
  for(let [type,map] of receipesDwarf.entries()){
    describe(`Check for ${type}`, () => {
      for(let [name,receipe]of Object.entries(map)){
        describe(`Check for ${name}`, () => {
          checkType(name,receipe);
          checkLogic(name,receipe);
        });
      }
    });
  }
});

function checkType(name:string,receipe:JSON):void{
    it(`Types of value`, () =>{
      expect(typeof receipe['first_value']).toBe('number'); //first_value should be number
      expect(typeof receipe['second_value']).toBe('number'); //second_value should be number
      expect(typeof receipe['up_symbol']).toBe('boolean'); //up_symbol should be boolean
      expect(typeof receipe['stop_symbol']).toBe('boolean'); //stop_symbol should be boolean
    });
}

function checkLogic(name:string,receipe:JSON):void{
    //une carte peut pas avoir les deux symboles en même temps
    it(`Logic of symbole`, () =>{
      expect(receipe['up_symbol'] && receipe['stop_symbol']).toBeFalsy
    });

    //si une carte a deux valeurs, il ne peut pas avoir de symboles
    it(`Logic of value and symbole`, () =>{
      expect(
        (receipe['first_value'] > 0 && receipe['second_value'] > 0) &&
        (receipe['up_symbol'] || receipe['stop_symbol'])
      ).toBeFalsy
    });
}


