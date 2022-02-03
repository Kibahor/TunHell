import { PlayerHand } from './PlayerHand'
import { Mine } from './Mine'

export class GameBoard {
    public mineList:Array<Mine> = [];
    public playerHandList:Array<PlayerHand> = [];
}