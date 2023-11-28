import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangmanService } from '../hangman.service';

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hangman.component.html',
  styleUrl: './hangman.component.scss'
})
export class HangmanComponent {

 

  constructor(public service: HangmanService) { 
     
  }

  

}
