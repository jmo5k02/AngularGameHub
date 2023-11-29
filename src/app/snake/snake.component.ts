import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiComponent} from "./components/ui/ui.component";

@Component({
  selector: 'app-snake',
  standalone: true,
  imports: [CommonModule, UiComponent],
  templateUrl: './snake.component.html',
  styleUrl: './snake.component.scss'
})
export class SnakeComponent {

}
