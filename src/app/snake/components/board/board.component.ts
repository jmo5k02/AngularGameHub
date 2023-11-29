import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Board } from '../../entities/board/board';
import { FormsModule } from '@angular/forms';
import { LogikService } from '../../entities/logik/logik.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit  {

  boardSize: number = 10;

  board: Board | undefined;

  constructor(public service: LogikService) { }

  ngOnInit(): void {
    
  }



  

    
}
