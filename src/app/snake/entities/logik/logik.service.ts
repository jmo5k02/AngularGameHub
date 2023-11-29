import { Injectable } from '@angular/core';
import { Board } from '../board/board';
import { Snake } from '../snake/snake';
import { Direction } from '../../types/direction';

@Injectable({
  providedIn: 'root'
})
export class LogikService {

  isGameStarted: boolean = false;

  gameBoard: Board | undefined;

  gameSnake: Snake | undefined;

  constructor() { }

  startGame(boardSize: number): void {

    this.gameBoard = new Board(boardSize);

    this.gameSnake = new Snake();
    

    this.isGameStarted = true;

    const loop = () => {
      if (!this.isGameStarted) {
        return;
      }
      if (this.gameSnake) {
        
        this.gameSnake.move();
    
        if (this.gameSnake.detectCollision()) {
          this.endGame();
          return;
        }
    
        setTimeout(loop, 500); // Wait 0.5 seconds before next iteration
      }
    };
  
    loop();

    console.log(this.gameBoard.board);
  }

  endGame(): void {
    this.isGameStarted = false;
  }

//Check if a position is occupied by the snake
  isSnake(position: number[]) : boolean {




    if (this.gameSnake?.segmentPos) {
      for (let segment of this.gameSnake.segmentPos) {
        if (segment.length === position.length 
          && 
          segment.every((value, index) => value === position[index])) {
            return true;
        }
      }
    }
    return false;
    
  }

  isFood(position: number[]) : boolean {
    // if (this.gameBoard?.eatables.includes(position)) {
    //   return true;
    // }
    return false;
  }
  isEatable() : void {

  }

  onArrowClick(direction: Direction): void {
    if (this.gameSnake) {
      this.gameSnake.direction = direction;
    }
    
  }

}
