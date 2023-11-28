import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangmanService } from '../hangman.service';
import {InputComponent} from "../input/input.component";
import { FormsModule } from '@angular/forms';
import { GUIComponent } from '../gui/gui.component';
import { HangmanType } from '../hangman-type';

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [CommonModule, InputComponent, GUIComponent, FormsModule],
  templateUrl: './hangman.component.html',
  styleUrl: './hangman.component.scss'
})
export class HangmanComponent {

  inputChar: string = "";
  gameMode: HangmanType = HangmanType.Classic;


  constructor(public service: HangmanService) {
  }



}
