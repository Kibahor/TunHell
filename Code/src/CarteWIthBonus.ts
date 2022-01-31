import {Carte} from "./Carte"
import {TypeCarte} from "./TypeCarte"
import { TypeNain } from "./TypeNain";

export class CarteWithBonus extends Carte{
    public valeur2: number

    public constructor(name:string, typeCarte:TypeCarte, typeNain:TypeNain, valeur1:number, valeur2:number, upSymbol:boolean, stopSymbol:boolean){
        super(name,typeCarte,typeNain,valeur1,upSymbol,stopSymbol);
        this.valeur2 = valeur2;
    }

    public printCarte(): void {
        super.printCarte();
        console.log('========CarteWithBonus========');
        console.log("Valeur2: "+this.valeur2);
    }
}