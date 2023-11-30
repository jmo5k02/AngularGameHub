import { Eatables } from '../../types/eatables';
import { Board } from '../board/board';
import { Eatable } from './eatable';

export class SpeedItem implements Eatable {
    
    posX: number;
    posY: number;
    nutrition: number = 1;
    speedIncrease = (Math.random());
    
    constructor(x: number, y: number) {
        this.posX = x;
        this.posY = y;
        
    }

    spawn(board: Board): number[] {
        let x = Math.floor(Math.random() * board.boardSize);
        let y = Math.floor(Math.random() * board.boardSize);

        while (x === this.posX && y === this.posY) {
            x = Math.floor(Math.random() * board.boardSize);
            y = Math.floor(Math.random() * board.boardSize);
        }

        this.posX = x;
        this.posY = y;

        return [x, y];
    }

    getPosition(): number[] {
        return [this.posX, this.posY];
    }

    getType(): Eatables {
        return Eatables.SPEEDITEM;
    }
}