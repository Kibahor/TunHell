import { Card } from './Card/Card'
import { Stack } from './Card/Stack'
import { StackType } from './Card/StackType'
import { Player } from './Player';

export class GameBoard {

    public id: number;
    public nbPlayers: number;
    public players:Array<Player> = [];

    public mines: Array<Stack> = [];
    public discards: Array<Stack> = [];
    public recruitCenter: Stack;

    public trophy: Array<Card> = [];
    public unUsedCards: Stack;


    public constructor(id: number, nbPlayers: number, deck:Map<string,Array<Card>>) {
        this.id = id;
        this.nbPlayers = nbPlayers;
        this.trophy = deck.get('Trophy');

        this.recruitCenter = new Stack("RecuitCenter", StackType.RecruitCenter);
        this.unUsedCards = new Stack("UnUsedCards", StackType.unUsedCards);

        for (let stack of this.getPlayersStack(this.fisherYatesShuffle(deck.get('Dwarf')))) {
            this.players.push(new Player(stack, nbPlayers));
        }
        let mines = deck.get('Enemy').concat(deck.get('Bonus')).concat(deck.get('Treasure'));
        this.mines = this.divideBy(3, this.fisherYatesShuffle(mines), this.fisherYatesShuffle(deck.get('End_Mine')));
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
        for (let i = 0; i < nb; i++) {
            let s = new Stack("Mine" + i, StackType.Mine);
            s.addCard(endMine[i]);
            s.addCollection(cards.slice(n * i, n * (i + 1)));               // Transfert le nombre de carte total (- reste) / nombre de joueur pour chacun des joueurs
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

    public getPlayersStack(card: Array<Card>): Array<Stack> {
        let tmpArr = [];
        for (let i = 0; i < this.nbPlayers; i++) {
            let s = new Stack("PlayerHand" + i, StackType.PlayerHand);
            s.addCollection(card.slice(6 * i, 6 * (i + 1)));                // Transfert 6 carte à chaque joueur
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
        if (this.mines.length != 0) {
            a = this.mines.map(tab => tab.collection.length).reduce( (acc, curr) => acc + curr);
        }
        console.debug('Mine ' + a);

        let b = 0;
        if (this.players.length != 0) {
            b = this.players.map(player => player.playerHand.collection.length).reduce( (acc, curr) => acc + curr);
        }
        console.debug('PlayerHand ' + b);

        let c = 0;
        if (this.discards.length != 0) {
            c = this.discards.map(tab => tab.collection.length).reduce( (acc, curr) => acc + curr);
        }
        console.debug('Discard ' + c);

        let d = this.recruitCenter.collection.length;
        console.debug('RecuitCenter ' + d);

        let e = this.trophy.length;
        console.debug('Trophy ' + e);

        let f = this.unUsedCards.collection.length;
        console.debug('UnUsed ' + f);

        console.debug('=== Total ' + (a+b+c+d+e+f) + ' ===');
    }

    public printPlayerHands() : void {
        console.debug('=== Players hands ===');
        for (let i=0; i < this.nbPlayers; i++) {
            console.debug('Player ' + (i+1) + ' : ' + this.players[i].playerHand.collection.length);
        }
    }
}