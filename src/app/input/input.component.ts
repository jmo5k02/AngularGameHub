import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HangmanService} from "../hangman.service";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  constructor(public service: HangmanService) {

  }
}
