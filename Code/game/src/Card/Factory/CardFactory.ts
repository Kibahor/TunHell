import { Card } from "../Card";
export abstract class CardFactory {
    abstract CreateCard(name:string, typename:string, receipe:JSON, nb:number) : Array<Card>;
}
