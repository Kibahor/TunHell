import { CardFactory } from "./CardFactory";
import { Card } from "./Card";
import { Dwarf } from "./Dwarf";

export class DwarfFactory extends CardFactory {

    public CreateCard(receipe:JSON, nb:number) : Array<Card> {

        if (!this.verify_receipe(receipe)) {
            throw `Problème création de la carte Dwarf (nb:${nb})`;
        }
        let cards : Array<Card> = [];
        for (let i = 0; i < nb; i++) {
            cards.push(new Dwarf('Warrior', receipe['first_value'], receipe['second_value'], receipe['up_symbol'], receipe['stop_symbol']));
        }
        return cards;
    }

    public verify_receipe(receipe:JSON) : boolean { //Vrai ok et Faux ko
        try {
            this.assertType(receipe);
            this.assertSymbole(receipe);
            this.assertValueAndSymbole(receipe);
        } catch (err) {
            console.error(err);
            return false;
        }
        return true;
    }

    private assertType(receipe:JSON):void { // Vérification des clés et des types
          if (!(
            typeof receipe['first_value'] === 'number' &&
            typeof receipe['second_value'] === 'number' &&
            typeof receipe['up_symbol'] === 'boolean' &&
            typeof receipe['stop_symbol'] === 'boolean'
          )) throw 'Invalid type : une ou plusieurs valeurs du json ne contiennent pas le bon type ou il manque une clé';
    }

    assertSymbole(receipe:JSON):void {
        if ((receipe['up_symbol'] && receipe['stop_symbol']) === true)
            throw "Invalid logic : une carte peut pas avoir les deux symboles en même temps"
    }

    assertValueAndSymbole(receipe:JSON):void {
        if (
            (receipe['first_value'] > 0 && receipe['second_value'] > 0) &&
            (receipe['up_symbol'] || receipe['stop_symbol'])
        ) throw 'Invalid logic : si une carte a deux valeurs, il ne peut pas avoir de symboles !';
    }
}