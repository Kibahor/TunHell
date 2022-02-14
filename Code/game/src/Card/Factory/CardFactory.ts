import { Card } from "../Card";
export abstract class CardFactory {
    protected abstract verify_receipe(receipe:JSON) : boolean;
    abstract CreateCard(receipe:JSON, nb:number) : Array<Card>;
}
