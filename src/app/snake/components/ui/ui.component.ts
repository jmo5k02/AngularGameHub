import {Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Direction} from "../../types/direction";
import { LogikService } from '../../entities/logik/logik.service';

@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.scss'
})
export class UiComponent {

  constructor(public service: LogikService) { }

  direction: Direction = Direction.RIGHT;
  keyPressed?:boolean = false; // Variable, um den Tastenzustand zu verfolgen
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keyPressed = true;
    if (this.keyPressed) {

      switch(event.key) {
        case 'ArrowUp':
          this.direction = Direction.UP;
          if (this.service.gameSnake) {
            this.service.gameSnake.direction = Direction.UP;

          }
          break;
        case 'ArrowDown':
          if (this.service.gameSnake) {
            this.service.gameSnake.direction = Direction.DOWN;

          }
          break;
        case 'ArrowLeft':
          if (this.service.gameSnake) {
            this.service.gameSnake.direction = Direction.LEFT;

          }
          break;
        case 'ArrowRight':
          if (this.service.gameSnake) {
            this.service.gameSnake.direction = Direction.RIGHT;

          }

          break;
        case 'Escape':
          console.log("Escape")
      }
      this.keyPressed = undefined
    }
  }

  // @HostListener('window:keyup', ['$event'])
  // handleKeyboardUpEvent(event: KeyboardEvent) {
  //
  //     this.keyPressed = false;
  //     if (!this.keyPressed) {
  //       console.log(this.direction + " Taste losgelassen")
  //
  //     }
  //   this.keyPressed = undefined; // Zurücksetzen des Tastenzustands, wenn die Taste losgelassen wird
  //   }
}
