import { Eatables } from "../../types/eatables";
import { Board } from "../board/board";

export interface Eatable {
    posX: number;
    posY: number;

    nutrition: number;

    spawn(board: Board): number[];

    getPosition(): number[];

    getType(): Eatables;
}
