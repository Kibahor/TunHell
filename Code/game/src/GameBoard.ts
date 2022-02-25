import { cpuUsage } from 'process';
import { Card } from './Card/Card'
import { Stack } from './Stack'
import { StackType } from './StackType'

export class GameBoard {

    public id: number;
    public nbPlayers: number;

    public mineStack: Array<Stack> = [];
    public playerHandStack: Array<Stack> = [];
    public discardStack: Array<Stack> = [];
    public recruitCenter: Stack;

    public trophy: Array<Card> = [];
    public unUsedCards: Stack;


    public constructor(id: number, nbPlayers: number, dwarfs: Array<Card>, enemyAndbonus: Array<Card>, endMine: Array<Card>, trophy: Array<Card>) {
        this.id = id;
        this.nbPlayers = nbPlayers;
        this.playerHandStack = this.giveToPlayers(this.fisherYatesShuffle(dwarfs));
        this.mineStack = this.divideBy(3, this.fisherYatesShuffle(enemyAndbonus), this.fisherYatesShuffle(endMine));
        this.trophy = trophy;
    }

    public fisherYatesShuffle(cards: Array<Card>): Array<Card> {
        for (let i = cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }

    public divideBy(nb: number, cards: Array<Card>, endMine: Array<Card>): Array<Stack> {
        const n = Math.floor(cards.length / nb);
        let tmpArr = [];
        for (let i = 0; i <= nb; i++) {
            let s = new Stack("Mine" + i, StackType.Mine);
            s.addCard(endMine[i]);
            s.addCollection(cards.slice(n * i, n * (i + 1) - 1));               // A tester mais normalement correct
            tmpArr[i] = s;
        }
        if (nb % n != 0) {
            this.unUsedCards.addCollection(cards.slice(n * nb, cards.length));
        }
        if (endMine.length > nb) {
            this.unUsedCards.addCollection(cards.slice(nb, endMine.length));
        }
        return tmpArr;
    }

    public giveToPlayers(card: Array<Card>): Array<Stack> {
        let tmpArr = [];
        for (let i = 0; i <= this.nbPlayers; i++) {
            let s = new Stack("PlayerHand" + i, StackType.PlayerHand);
            s.addCollection(card.slice(4 * i, 4 * (i + 1) - 1));                // A tester mais normalement correct
            tmpArr[i] = s;
        }
        if (card.length > this.nbPlayers * 4) {
            this.recruitCenter.addCollection(card.slice(this.nbPlayers * 4, card.length));
        }
        return tmpArr;
    }

    public comptAllCards(): void {
        console.log('=== Number of cards ===');

<<<<<<< HEAD
        let a = this.mineStack.map(tab => tab.collection.length).reduce( (acc, curr) => acc + curr);
        console.log('Mine ' + a);

        let b = this.playerHandStack.map(tab => tab.collection.length).reduce( (acc, curr) => acc + curr);
        console.log('PlayerHand ' + b);

        let c = this.discardStack.map(tab => tab.collection.length).reduce( (acc, curr) => acc + curr);
        console.log('Discard ' + c);

        let d = this.recruitCenter.collection.length;
        console.log('RecuitCenter ' + d);

        let e = this.trophy.length;
        console.log('Trophy ' + e);

        let f = this.unUsedCards.collection.length;
        console.log('Unused ' + f);

        console.log('Total ' + a+b+c+d+e+f);
=======
        console.log('Mine ' + this.mineStack.map(tab => tab.collection.length).reduce((acc, curr) => acc + curr));
        console.log('PlayerHands ' + this.playerHandStack.map(tab => tab.collection.length).reduce((acc, curr) => acc + curr));
        console.log('Discard ' + this.discardStack.map(tab => tab.collection.length).reduce((acc, curr) => acc + curr));
        console.log('RecuitCenter ' + this.recruitCenter.collection.length);
        console.log('Trophy ' + this.trophy.length);
        console.log('Unused ' + this.unUsedCards.collection.length);
>>>>>>> a86a49132dae1debf065732d71a5a23223d6c35b
    }
}