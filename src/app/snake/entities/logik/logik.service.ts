import { Injectable } from '@angular/core';
import { Board } from '../board/board';
import { Snake } from '../snake/snake';

@Injectable({
  providedIn: 'root'
})
export class LogikService {

  gameBoard: Board | undefined;

  gameSnake: Snake | undefined;

  constructor() { }

  startGame(): void {
    
  }

}
