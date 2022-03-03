import { Stack } from './Stack'
import { StackType } from './StackType'

export class Mine {

    public cardStack: Stack;
    public playerCardStack: Array<Stack>;

    public constructor(nb: number, cardStack: Stack) {
        this.cardStack = cardStack;
        for (let i = 0; i < nb; i++) {
            let p = new Stack("PLayerMine" + (nb+1), StackType.PlayerMine);
            this.playerCardStack.push(p);
        }
    }

    public numberOfCards() : number {
        return (this.cardStack.collection.length + this.playerCardStack.map(tab => tab.collection.length).reduce( (acc, curr) => acc + curr));
    }
}