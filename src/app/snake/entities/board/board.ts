import { Input } from "@angular/core";
import { Eatable } from "../eatables/eatable";

export class Board {
    boardSize: number = 0;
    board: number[][] = [];

    eatables: Eatable[];

    constructor(size: number) {
        this.boardSize = size;
        this.board = this.init2DBoard(size);
        this.eatables = [];
    }

    init2DBoard(size: number): number[][] {
        return Array.from({ length: size }, 
          () => Array.from(
            { length: size }, 
              () => 0));
    }

    *[Symbol.iterator]() {
        for (let i = 0; i < this.boardSize; i++) {
                yield this.board[i];
            
        }
    }


}
