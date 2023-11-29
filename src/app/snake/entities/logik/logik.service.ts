import { Injectable } from '@angular/core';
import { Board } from '../board/board';
import { Snake } from '../snake/snake';

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

    console.log(this.gameBoard.board);
  }

  endGame(): void {
    this.isGameStarted = false;
  }

}
