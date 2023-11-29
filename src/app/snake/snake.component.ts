import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { FormsModule } from '@angular/forms';
import {UiComponent} from "./components/ui/ui.component";

@Component({
  selector: 'app-snake',
  standalone: true,
  imports: [CommonModule, BoardComponent, FormsModule, UiComponent],
  templateUrl: './snake.component.html',
  styleUrl: './snake.component.scss'
})
export class SnakeComponent {

}
