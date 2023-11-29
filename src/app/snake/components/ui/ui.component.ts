import {Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Direction} from "../../types/direction";

@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.scss'
})
export class UiComponent {

  direction: Direction = Direction.RIGHT;
  keyPressed?:boolean = false; // Variable, um den Tastenzustand zu verfolgen
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keyPressed = true;
    if (this.keyPressed) {

      switch(event.key) {
        case 'ArrowUp':
          this.direction = Direction.UP;
          console.log(this.direction)
          break;
        case 'ArrowDown':
          this.direction = Direction.DOWN;
          console.log(this.direction)
          break;
        case 'ArrowLeft':
          this.direction = Direction.LEFT;
          console.log(this.direction)
          break;
        case 'ArrowRight':
          this.direction = Direction.RIGHT;
          console.log(this.direction)
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
