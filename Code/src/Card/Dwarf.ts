import { Card } from './Card'

export class Dwarf extends Card {
    first_value:number = 0;
    second_value:number = 0;
    up_symbol:boolean = false;
    stop_symbol:boolean = false;

    public constructor(name:string, first_value:number, second_value:number, up_symbol:boolean, stop_symbol:boolean) {
        super(name);
        this.first_value = first_value;
        this.second_value = second_value;
        this.up_symbol = up_symbol;
        this.stop_symbol = stop_symbol;
    }

    public printCard(): void {
        super.printCard();
        console.log('1st value : '+this.first_value);
        console.log('2nd value : '+this.second_value);
        console.log('UP Symbole : '+this.up_symbol);
        console.log('STOP Symbole : '+this.stop_symbol);
    }
}