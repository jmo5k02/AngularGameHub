import { Injectable } from '@angular/core';
import { germanWords } from './Transfer_Notizen';
import { HangmanType } from './hangman-type';
@Injectable({
  providedIn: 'root'
})
export class HangmanService {

  isGameRunning: boolean = false;
  isGameWon: boolean = false;
  isGameLost: boolean = false;

  gameMode: HangmanType = HangmanType.Classic;

  wort: string = "";

  wordLength: number = 0;

  benutzteChars: string[] = [];
  benutzteFalscheChars: string[] = [];
  wordProgess: string[] = [];

  maxFehlversuche: number = 8;

  checkChar(char: string): void {
    console.log("checkChar: " + char);
    console.log("wordToCheck: " + this.wort);
    
    if (this.benutzteChars.includes(char)) {
        return;
    }

    this.benutzteChars = [...this.benutzteChars, char]

    if (this.wort.toLowerCase().includes(char.toLowerCase())) {
        for (let i = 0; i < this.wort.length; i++) {
            if (this.wort.charAt(i).toLowerCase() == char.toLowerCase()) {
                this.wordProgess[i] = char;
            }
        }
        
    } else {
        this.benutzteFalscheChars.push(char);
    }
    
    if (this.benutzteFalscheChars.length >= this.maxFehlversuche) {
        this.isGameLost = true;
        alert("Du hast verloren!");
        
    }

    console.log("Word Progress: " + this.wordProgess);
    if (this.wordProgess.join("").toUpperCase() == this.wort.toUpperCase()) {
       

        
        this.isGameWon = true;
        alert("Du hast gewonnen!");
        
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
    let possibleWords: string[] = germanWords.filter(
      (word) => word.length == this.wordLength);
    //Generate the word with wordlength
    let genWort: string = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    //Generate random word from germanWords array
    
    return genWort;
  }

  startGame(): void {
      this.intiGameVarialbes(this.gameMode);

      this.isGameRunning = true;
      this.wort = this.genereateWord();
      this.generateWordProgress();
  }

  intiGameVarialbes(gameType: HangmanType): void {

    if (gameType == HangmanType.Classic) {
        this.maxFehlversuche = 7;
       
    } else if (gameType == HangmanType.Meme) {
        this.maxFehlversuche = 8;
    }


    this.isGameRunning = true;
    this.isGameWon = false;
    this.isGameLost = false;

    this.wort = "";

    this.benutzteChars = [];
    this.benutzteFalscheChars = [];
    this.wordProgess = [];
  }
}
