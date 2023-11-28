import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HangmanService {

  isGameRunning: boolean = false;
  isGameWon: boolean = false;

  wort: string = "";

  wordLength: number = 0;

  benutzteChars: string[] = [];
  benutzteFalscheChars: string[] = [];
  wordProgess: string[] = [];

  checkChar(char: string): void {
    console.log("checkChar: " + char);
    
    if (this.benutzteChars.includes(char)) {
        return;
    }

    this.benutzteChars = [...this.benutzteChars, char]

    if (this.wort.includes(char)) {
        for (let i = 0; i < this.wort.length; i++) {
            if (this.wort.charAt(i) == char) {
                this.wordProgess[i] = char;
            }
        }
        
    } else {
        this.benutzteFalscheChars.push(char);
    }
    
    console.log("Word Progress: " + this.wordProgess);
    if (this.wordProgess.join("") == this.wort) {
        this.isGameRunning = false;
        this.isGameWon = true;
        alert("You won!");
    }
  }

  generateWordProgress(): void {
    this.wordProgess = [];
    for (let i = 0; i < this.wort.length; i++) {
        this.wordProgess.push("_");
    }
  }

  getWordProgress(): string[] {
      return this.wordProgess;
  }

  genereateWord(): string {
    let genWort: string = "";
    //Generate the word with wordlength
    for (let i = 0; i < this.wordLength; i++) {
      i % 2 == 0 ? genWort += "a" : genWort += "f";
        
    }
    return genWort;
  }

  startGame(): void {
      this.intiGameVarialbes();
      this.isGameRunning = true;
      this.wort = this.genereateWord();
      this.generateWordProgress();
  }

  intiGameVarialbes(): void {
    this.isGameRunning = false;
    this.wort = "";
    this.benutzteChars = [];
    this.benutzteFalscheChars = [];
    this.wordProgess = [];
  }
}
