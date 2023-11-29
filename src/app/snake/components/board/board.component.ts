import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Board } from '../../entities/board/board';
import { FormsModule } from '@angular/forms';
import { LogikService } from '../../services/logik/logik.service';
import { Direction } from '../../types/direction';
import { UiComponent } from '../ui/ui.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, FormsModule, UiComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit  {

  directionR: Direction = Direction.RIGHT;
  directionL: Direction = Direction.LEFT;
  directionU: Direction = Direction.UP;
  directionD: Direction = Direction.DOWN;

  boardSize: number = 10;

  board: Board | undefined;

  constructor(public service: LogikService) { }

  ngOnInit(): void {
    
  }



  

    
}
