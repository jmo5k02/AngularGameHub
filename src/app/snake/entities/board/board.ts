import { Input } from "@angular/core";
import { Eatable } from "../eatables/eatable";

export class Board {
    
    sizeX: number;
    sizeY: number;
    eatables: Eatable[];

    constructor(sizeX: number, sizeY: number) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.eatables = [];
    }

    initBoard(): void {
        
    }


}
