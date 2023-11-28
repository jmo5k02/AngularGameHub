import { Routes } from '@angular/router';
import { SudokuComponent } from './sudoku/sudoku.component';
import { HangmanComponent } from './hangman/hangman.component';

export const routes: Routes = [
    {path: 'Sudoku', component: SudokuComponent},
    {path: 'Hangman', component: HangmanComponent},
];
