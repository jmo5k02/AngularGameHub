import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HangmanService} from "../../entities/hangman.service";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  alphabet:string[] = ['A','B','C','D','E','F',
                      'G','H','I','J','K','L',
                      'M','N','O','P','Q','R',
                      'S','T','U','V','W','X','Y','Z'];

  usedChars: string[] = [];
    addCharToList(char:string) {
      //this.service.benutzteChars.push(char) // Kann gelöscht werden
      this.usedChars.push(char)
      this.usedChars.sort()
      // console.log(this.service.benutzteChars) // Kann gelöscht werden
      console.log(this.usedChars)
    }

    findBuchstabe(letter:string):boolean{
      if (this.service.benutzteChars.includes(letter) || this.usedChars.includes(letter)){ // Hier soll auf die service.benutzeChars Liste zugriffen werden
        return true;
      }
      else {
        return false;
      }

    }

  constructor(public service: HangmanService) {

  }
}
