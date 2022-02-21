import { Card } from "../Card";
export abstract class CardFactory {
    protected abstract verify_receipe(receipe:JSON) : boolean;
    abstract CreateCard(typename:string, receipe:JSON, nb:number) : Array<Card>;
}
