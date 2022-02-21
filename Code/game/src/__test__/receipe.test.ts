import {receipes, sortReceipes, getDeck } from '../Card/Factory/ReceipeFunctions';

let deck=getDeck('Default');
let sortedReceipes = sortReceipes(receipes,deck);
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


