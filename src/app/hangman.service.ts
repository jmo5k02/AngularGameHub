import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HangmanService {

  wort: string = "";
  
  counter: number = 0;

  benutzteChars: string[] = ["a", "b", "c"];
  benutzteFalscheChars: string[] = [];
  wordProgess: string[] = [];

  checkChar(char: string): boolean {
      return false;
  }

  generateWordProgress(): void {
      
  }

  getWordProgress(): string[] {
      return this.wordProgess;
  }

  genereateWord(wortlänge: number): string {
    return "sdfasdf";
  }
}
