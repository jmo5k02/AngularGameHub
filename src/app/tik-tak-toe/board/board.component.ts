import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  @Input() board: string[][] | undefined;
  @Input() currentPlayer: 'X' | 'O' | undefined;
  @Output() moveMade = new EventEmitter<{ row: number, col: number }>();

  // Benutzerklick auf Zelle
  cellClick(row: number, col: number): void {
    this.moveMade.emit({ row, col });
  }
}
