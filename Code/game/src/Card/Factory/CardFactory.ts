import { Card } from "../Card";
export abstract class CardFactory {
    abstract CreateCard(typename:string, receipe:JSON, nb:number) : Array<Card>;
}
