import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hangman.component.html',
  styleUrl: './hangman.component.scss'
})
export class HangmanComponent {
  word:string[];
  char:string | undefined;

  addChar():void{
    if(!this.char) {
      return
    }
    this.word.push(this.char)
    // this.todos.unshift(this.item)
    this.char = ''
  }
}
