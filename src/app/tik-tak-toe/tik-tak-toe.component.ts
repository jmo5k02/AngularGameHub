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
  image1Path: string = 'assets/TikTakToeImages/memeface1.png';
  image2Path = 'assets/TikTakToeImages/memeface2.png';

  currentPlayer: 'X' | 'O' = 'X';
  winner: 'X' | 'O' | 'draw' | null = null;
  board: string[][] = [['', '', ''], ['', '', ''], ['', '', '']];
  movesMade: number = 0;

  // Methode für einen Spielzug
  makeMove(row: number, col: number): void {
    // Überprüfe, ob die Zelle leer ist und das Spiel noch nicht vorbei ist
    if (!this.board[row][col] && !this.winner) {
      // Markiere die Zelle mit dem aktuellen Spieler
      this.board[row][col] = this.currentPlayer;
      this.movesMade++; // Zähle den Zug

      // Überprüfe, ob der aktuelle Spieler gewonnen hat
      if (this.checkWinner(row, col)) {
        this.winner = this.currentPlayer;
      } else if (this.movesMade === 9) {
        // Überprüfe auf ein Unentschieden, wenn alle Zellen belegt sind
        this.winner = 'draw';
      } else {
        // Wechsle zum anderen Spieler, wenn das Spiel nicht vorbei ist
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  // Überprüfung auf einen Gewinner
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

    return false; // Kein Gewinner gefunden
  }
  // Überprüfung auf Diagonalen
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

  // Zurücksetzen des Spiels
  resetGame(): void {
    this.currentPlayer = 'X';
    this.winner = null;
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.movesMade = 0;
  }
}
