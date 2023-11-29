import {Direction} from "../../types/direction";

export class Snake {
  segmenttempx: number = 0;
  segmenttempy: number = 0;
  segmentPos: number[][] = [[2,0],[1,0],[0,0]]; // Liste für die Position der Segmente
  direction: Direction = Direction.RIGHT; // Startrichtung
  wachsen: boolean = false;

  // Funktion zum Bewegen der Schlange
  move(): void {
    //Zwischenspeichern des letzten Segments
    this.segmenttempx = this.segmentPos[this.segmentPos.length - 1][0];
    this.segmenttempy = this.segmentPos[this.segmentPos.length-1][1];
    //Zwischenspeichern des letzten Segments - Ende
    // Implementierung der Logik für die Bewegung
    for (let i = this.segmentPos.length - 1; i >= 1; i--) {
      this.segmentPos[i] = this.segmentPos[i - 1];
    }
    if (this.direction===Direction.RIGHT){
      this.segmentPos[0] = [this.segmentPos[0][0],this.segmentPos[0][1]+1];
    } else if (this.direction===Direction.LEFT){
      this.segmentPos[0] = [this.segmentPos[0][0],this.segmentPos[0][1]-1];
    } else if (this.direction===Direction.UP){
      this.segmentPos[0] = [this.segmentPos[0][0]-1,this.segmentPos[0][1]];
    } else if (this.direction===Direction.DOWN){
      this.segmentPos[0] = [this.segmentPos[0][0]+1,this.segmentPos[0][1]];
    }
    // Implementierung der Logik für die Bewegung - Ende
    //Anhängen des gespeicherten Segments, wenn gegessen
    if (this.wachsen) {
      //Segment wird an letzte Stelle der Liste angefügt
      this.segmentPos.push([this.segmenttempx,this.segmenttempy])
    }
    //Anhängen des gespeicherten Segments, wenn gegessen - Ende
    //Zurücksetzen des Status, ob gegessen
    this.wachsen = false;
    console.log("Snake bewegt sich...");
  }

  // Funktion zum Erkennen von Kollisionen mit selbst
  detectCollision(): boolean {
    // Implementierung der Logik für die Kollisionserkennung
    for (let i =  1; i <= this.segmentPos.length - 1; i++) {
      if (this.segmentPos[0] === this.segmentPos[i]){
        return true;
      }
    }
    return false;
    // Implementierung der Logik für die Kollisionserkennung - Ende
    console.log("Kollision wird überprüft...");
  }

  // Funktion zum Essen
  eat(numbersList: number[][]): void {
    // Implementierung der Logik für das Essen
    for (let i =  0; i <= numbersList.length - 1; i++) {
      if (this.segmentPos[0] === numbersList[i]){
        //Setzen der Variable  ob gegessen of Bewegungsmethode
        this.wachsen = true;
      }
    }
    // Implementierung der Logik für das Essen - Ende
    console.log("Die Schlange isst...");
  }
}
