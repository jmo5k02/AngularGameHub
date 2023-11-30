import { Routes } from '@angular/router';
import { SudokuComponent } from './sudoku/sudoku.component';
import { HangmanComponent } from './hangman/hangman.component';
import { HomeComponent } from './home/home.component';
import { SnakeComponent } from './snake/snake.component';
import {TikTakToeComponent} from "./tik-tak-toe/tik-tak-toe.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Sudoku', component: SudokuComponent},
    {path: 'Hangman', component: HangmanComponent},
    {path: 'Snake', component: SnakeComponent},
    {path: 'TikTakToe', component: TikTakToeComponent}
];
