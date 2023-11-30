import { Injectable } from '@angular/core';
import { Board } from '../../entities/board/board';
import { Snake } from '../../entities/snake/snake';
import { Direction } from '../../types/direction';
import { Apple } from '../../entities/eatables/apple';
import { Eatables } from '../../types/eatables';
import { SpeedItem } from '../../entities/eatables/SpeedItem';
import { Eatable } from '../../entities/eatables/eatable';

@Injectable({
  providedIn: 'root'
})
export class LogikService {

  isGameStarted: boolean = false;

  pause: boolean = false;

  gameSpeed: number = 300;

  gameBoard: Board | undefined;

  gameSnake: Snake | undefined;

  currentEatable: Eatable | undefined;

  constructor() { }

  startGame(boardSize: number): void {

    this.gameBoard = new Board(boardSize);

    this.gameSpeed = 300;

    let firstApple = new Apple(0,0)
    firstApple.spawn(this.gameBoard);
    let firstSpeedItem = new SpeedItem(0,0)
    firstSpeedItem.spawn(this.gameBoard);

    this.gameBoard.eatables.push(firstApple);
    this.gameBoard.eatables.push(firstSpeedItem);

    this.gameSnake = new Snake();

    this.isGameStarted = true;

    // initiate the Game loop
    this.loop();

    console.log(this.gameBoard.board);
  }

  endGame(): void {
    this.isGameStarted = false;
  }

  //Game loop
  loop ()  {
    if (!this.isGameStarted) {
      return;
    }
    // If everything is initialized correctly, start the game loop
    if (this.gameSnake && this.gameBoard) {

      this.gameSnake.move();
  
      if (this.gameSnake.detectCollision(this.gameBoard)) {
        this.endGame();
        return;
      }

      if (this.isEatable(this.gameSnake.segmentPos[0])) {

        if ( typeof this.gameBoard.eatables[0] !== 'undefined' ) {

          const snakeHeadPos = this.gameSnake.segmentPos[0];

          const eatableIndex = this.gameBoard.eatables.findIndex(eatable => eatable.getPosition().every((value, index) => value === snakeHeadPos[index]));

          if (this.gameBoard.eatables[eatableIndex].getType() === Eatables.APPLE) {
            console.log("Apple eaten");
            this.gameSnake.wachsen = true;
            
            let newApple = new Apple(0,0);
            newApple.spawn(this.gameBoard);
            this.gameBoard.eatables.push(newApple);
              
          } else if (this.gameBoard.eatables[eatableIndex].getType() === Eatables.SPEEDITEM) {
            console.log("Speed eaten");

            
            this.gameSpeed = this.gameSpeed * ((this.gameBoard.eatables[eatableIndex] as SpeedItem).speedIncrease);
            
            
            
            let newSpeedItem = new SpeedItem(0,0)
            newSpeedItem.spawn(this.gameBoard);
            this.gameBoard.eatables.push(newSpeedItem);
          }

        this.gameBoard.eatables.splice(eatableIndex, 1);
        
      }
    }
  
      if (this.pause) {
        setTimeout(() => this.loop(), 500); // Pause for 500ms then continue the loop
      } else {
        setTimeout(() => this.loop(), this.gameSpeed); // Normal loop continuation
      }
    }
  };

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

  isSnakeHead(position: number[]) : boolean {
    if (this.gameSnake?.segmentPos[0]) {
      if (this.gameSnake?.segmentPos[0].length === position.length 
        && 
        this.gameSnake?.segmentPos[0].every((value, index) => value === position[index])) {
          return true;
      }
    }
    return false;
  }


  deleteEatable(position: number[]) : void {

  }

  // Check if a position is occupied by an eatable
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

  isApple(position: number[]) : boolean {
     if (this.gameBoard?.eatables) {
      for (let segment of this.gameBoard.eatables) {
        if (segment.getPosition().length === position.length 
          && 
          segment.getPosition().every((value, index) => value === position[index])) {
            if (segment.getType() === Eatables.APPLE) {
              return true;
            }
        }
      }
     }
     return false;
  }

  isSpeedItem(position: number[]) : boolean {
    if (this.gameBoard?.eatables) {
      for (let segment of this.gameBoard.eatables) {
        if (segment.getPosition().length === position.length 
          && 
          segment.getPosition().every((value, index) => value === position[index])) {
            if (segment.getType() === Eatables.SPEEDITEM) {
              return true;
            }
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
