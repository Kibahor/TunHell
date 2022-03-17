import { Card } from './Card'

export class Dwarf extends Card {
    public first_value:number;
    public second_value:number;
    public up_symbol:boolean;
    public stop_symbol:boolean;

    public constructor(name:string, typeName:string, first_value:number, second_value:number, up_symbol:boolean, stop_symbol:boolean, end_mine:boolean) {
        super(name,typeName,end_mine);
        this.first_value = first_value;
        this.second_value = second_value;
        this.up_symbol = up_symbol;
        this.stop_symbol = stop_symbol;
        //Mettre exception si le nom ne contient pas "Dwarf"
    }

    public printCard(): void {
        super.printCard();
        console.log('1st value : ' + this.first_value);
        console.log('2nd value : ' + this.second_value);
        console.log('UP Symbole : ' + this.up_symbol);
        console.log('STOP Symbole : ' + this.stop_symbol);
    }
}