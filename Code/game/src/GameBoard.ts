import { Card } from './Card/Card'
import { Stack } from './Stack'
import { StackType } from './StackType'
import { Mine } from './Mine'
import { threadId } from 'worker_threads';

export class GameBoard {

    public id: number;
    public nbPlayers: number;

    public mines: Array<Mine> = [];
    public playerHandStack: Array<Stack> = [];
    public discardStack: Array<Stack> = [];
    public recruitCenter: Stack;

    public trophy: Array<Card> = [];
    public unUsedCards: Stack;


    public constructor(id: number, nbPlayers: number, dwarfs: Array<Card>, enemyAndbonus: Array<Card>, endMine: Array<Card>, trophy: Array<Card>) {
        this.id = id;
        this.nbPlayers = nbPlayers;
        this.trophy = trophy;

        this.recruitCenter = new Stack("RecuitCenter", StackType.RecruitCenter);
        this.unUsedCards = new Stack("UnUsedCards", StackType.unUsedCards);

        this.playerHandStack = this.giveToPlayers(this.fisherYatesShuffle(dwarfs));
        this.mines = this.divideBy(3, this.fisherYatesShuffle(enemyAndbonus), this.fisherYatesShuffle(endMine));
    }

    public fisherYatesShuffle(cards: Array<Card>): Array<Card> {
        for (let i = cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }

    public divideBy(nb: number, cards: Array<Card>, endMine: Array<Card>): Array<Mine> {
        const n = Math.floor(cards.length / nb);
        let tmpArr = [];
        for (let i = 0; i < nb; i++) {
            let s = new Stack("Mine" + i, StackType.Mine);
            s.addCard(endMine[i]);
            s.addCollection(cards.slice(n * i, n * (i + 1)));               // Transfert le nombre de carte total (- reste) / nombre de joueur pour chacun des joueurs
            tmpArr[i] = new Mine(nb, s);
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
        for (let i = 0; i < this.nbPlayers; i++) {
            let s = new Stack("PlayerHand" + i, StackType.PlayerHand);
            s.addCollection(card.slice(4 * i, 4 * (i + 1)));                // Transfert 4 carte à chaque joueur
            tmpArr[i] = s;
        }
        if (card.length > this.nbPlayers * 4) {
            this.recruitCenter.addCollection(card.slice(this.nbPlayers * 4, card.length));
        }
        return tmpArr;
    }

    public comptAllCards() : void {
        console.debug('=== Number of cards ===');

        let a = 0;
        for (let i=0; i < this.nbPlayers; i++) {
            a += this.mines[i].numberOfCards();
        }
        console.debug('Mine ' + a);

        let b = 0;
        if (this.playerHandStack.length != 0) {
            b = this.playerHandStack.map(tab => tab.collection.length).reduce( (acc, curr) => acc + curr);
        }
        
        console.debug('PlayerHand ' + b);

        let c = 0;
        if (this.discardStack.length != 0) {
            c = this.discardStack.map(tab => tab.collection.length).reduce( (acc, curr) => acc + curr);
        }
        console.debug('Discard ' + c);

        let d = this.recruitCenter.collection.length;
        console.debug('RecuitCenter ' + d);

        let e = this.trophy.length;
        console.debug('Trophy ' + e);

        let f = this.unUsedCards.collection.length;
        console.debug('UnUsed ' + f);

        console.debug('Total ' + (a+b+c+d+e+f));
    }

    public printPlayerHands() : void {
        console.debug('=== Players hands ===');
        for (let i=0; i < this.nbPlayers; i++) {
            console.debug('Player ' + (i+1) + ' : ' + this.playerHandStack[i].collection.length);
        }
    }
}