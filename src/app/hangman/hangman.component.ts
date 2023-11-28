import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangmanService } from '../hangman.service';
import {InputComponent} from "../input/input.component";

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: './hangman.component.html',
  styleUrl: './hangman.component.scss'
})
export class HangmanComponent {



  constructor(public service: HangmanService) {

  }



}
