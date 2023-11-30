import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardComponent} from "./board/board.component";

@Component({
  selector: 'app-tik-tak-toe',
  standalone: true,
  imports: [CommonModule, BoardComponent],
  templateUrl: './tik-tak-toe.component.html',
  styleUrl: './tik-tak-toe.component.scss'
})
export class TikTakToeComponent {
  currentPlayer: 'X' | 'O' = 'X'; // Aktueller Spieler
  board: string[][] = [['', '', ''], ['', '', ''], ['', '', '']]; // Spielfeld

  // Logik für Zug des Spielers
  makeMove(row: number, col: number): void {
    if (!this.board[row][col]) {
      this.board[row][col] = this.currentPlayer;
      if (this.checkWinner(row, col)) {
        alert(`Spieler ${this.currentPlayer} hat gewonnen!`);
        this.resetGame();
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  // Überprüfung auf Gewinner
  checkWinner(row: number, col: number): boolean {
// Überprüfe die Reihe
    if (
      this.board[row][0] === this.currentPlayer &&
      this.board[row][1] === this.currentPlayer &&
      this.board[row][2] === this.currentPlayer
    ) {
      return true;
    }

    // Überprüfe die Spalte
    if (
      this.board[0][col] === this.currentPlayer &&
      this.board[1][col] === this.currentPlayer &&
      this.board[2][col] === this.currentPlayer
    ) {
      return true;
    }

    // Überprüfe die Diagonalen
    if (
      (row === col ||
        (row === 0 && col === 2) ||
        (row === 2 && col === 0)) &&
      this.checkDiagonals()
    ) {
      return true;
    }

    return false;
  }

  checkDiagonals(): boolean {
    return (
      (this.board[0][0] === this.currentPlayer &&
        this.board[1][1] === this.currentPlayer &&
        this.board[2][2] === this.currentPlayer) ||
      (this.board[0][2] === this.currentPlayer &&
        this.board[1][1] === this.currentPlayer &&
        this.board[2][0] === this.currentPlayer)
    );
  }

  resetGame(): void {
    this.currentPlayer = 'X';
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
  }
}
