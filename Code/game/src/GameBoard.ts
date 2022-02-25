import { Card } from './Card/Card'
import { Stack } from './Stack'
import { StackType } from './StackType'

export class GameBoard {

    public id : number;
    public nbPlayers : number;

    public mineStack : Array<Stack> = [];
    public playerHandStack : Array<Stack> = [];
    public discardStack : Array<Stack> = [];
    public recruitCenter : Stack;

    public unUsedCards : Array<Card> = [];


    public constructor(id : number, nbPlayers : number, dwarfs : Array<Card>, enemyAndbonus : Array<Card>, trophy : Array<Card>) {
        this.id = id;
        this.nbPlayers = nbPlayers;
        this.mineStack = this.divideBy(3, this.fisherYatesShuffle(enemyAndbonus));
        this.playerHandStack = null;

    }

    public fisherYatesShuffle(cards : Array<Card>) : Array<Card> {
        for (let i = cards.length - 1 ; i > 0 ; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }

    public divideBy(nb : number, cards : Array<Card>) : Array<Stack> {
        const n = Math.floor(cards.length / nb);
        let tmpArr = [];
        for (let i = 0; i <= nb ; i++) {
            let s = new Stack("Mine " + i, StackType.Mine);
            s.addCollection(cards.slice(n*i, n*(i + 1) - 1));            // A tester mais normalement correct
            tmpArr[i] = s;
        }
        if (nb % n != 0) {
            this.unUsedCards = cards.slice(n*nb, cards.length);         // A tester mais normalement correct
        }
        return tmpArr;
    }

    public giveToPlayers(card : Array<Card>) : Array<Stack> {
        return null;
    }
}