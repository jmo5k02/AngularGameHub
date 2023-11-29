import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-snake',
  standalone: true,
  imports: [CommonModule, BoardComponent, FormsModule],
  templateUrl: './snake.component.html',
  styleUrl: './snake.component.scss'
})
export class SnakeComponent {

}
