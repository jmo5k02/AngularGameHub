import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangmanService } from '../../entities/hangman.service';
import { HangmanType } from '../../entities/hangman-type';

@Component({
  selector: 'app-gui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gui.component.html',
  styleUrl: './gui.component.scss'
})
export class GUIComponent {

constructor(public service: HangmanService) {

}


  getImageURL(counter: number, hangmanType: HangmanType): string {
    // console.log("getImageURL: " + counter);
    if (hangmanType == HangmanType.Classic) {
      return `assets/${hangmanType}Images/${counter}.png`;
    } 

    return `assets/${hangmanType}Images/${counter}.jpg`;
    // return this.imageUrlsMeme[0] + counter + '.png';
  }

}
