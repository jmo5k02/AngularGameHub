import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangmanService } from '../hangman.service';
import {InputComponent} from "../input/input.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [CommonModule, InputComponent, FormsModule],
  templateUrl: './hangman.component.html',
  styleUrl: './hangman.component.scss'
})
export class HangmanComponent {

  inputChar: string = "";


  constructor(public service: HangmanService) {
  }



}
