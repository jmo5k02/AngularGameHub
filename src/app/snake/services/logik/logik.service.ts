import { Injectable } from '@angular/core';
import { Board } from '../../entities/board/board';
import { Snake } from '../../entities/snake/snake';
import { Direction } from '../../types/direction';
import { Apple } from '../../entities/eatables/apple';

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

    let testApple = new Apple(5,5)
    this.gameBoard.eatables.push(testApple);

    this.gameSnake = new Snake();

    this.isGameStarted = true;

    //Game loop
    const loop = () => {
      if (!this.isGameStarted) {
        return;
      }
      if (this.gameSnake && this.gameBoard) {

        this.gameSnake.move();
    
        if (this.gameSnake.detectCollision(this.gameBoard)) {
          this.endGame();
          return;
        }

        if (this.isEatable(this.gameSnake.segmentPos[0])) {
          this.gameSnake.wachsen = true;
          this.gameBoard.eatables.pop();
          let newApple = new Apple(0,0);
          this.gameBoard.eatables.push(newApple);
          newApple.spawn(this.gameBoard);
        }
    
        setTimeout(loop, 100); // Wait 0.5 seconds before next iteration
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
  isEatable(position: number[]) : boolean {
    if (this.gameBoard?.eatables) {
      for (let segment of this.gameBoard.eatables) {
        if (segment.getPosition().length === position.length 
          && 
          segment.getPosition().every((value, index) => value === position[index])) {
            return true;
        }
      }
    }
    return false;
  }

  onArrowClick(direction: Direction): void {
    if (this.gameSnake) {
      this.gameSnake.direction = direction;
    }
    
  }

}
