import { Board } from "../board/board";

export interface Eatable {
    posX: number;
    posY: number;

    spawn(board: Board): number[];

    getPosition(): number[];
}
