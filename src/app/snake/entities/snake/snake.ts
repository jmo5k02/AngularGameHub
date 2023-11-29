import {Direction} from "../../types/direction";

export class Snake {
  segmentPos: number[][] = []; // Liste für die Position der Segmente
  direction: Direction = Direction.RIGHT; // Startrichtung

  // Funktion zum Bewegen der Schlange
  move(): void {
    // Implementierung der Logik für die Bewegung
    for (let i = this.segmentPos.length - 1; i >= 1; i--) {
      this.segmentPos[i] = this.segmentPos[i - 1];
    }
    if (this.direction===Direction.RIGHT){
      this.segmentPos[0] = [this.segmentPos[0][0]+1,this.segmentPos[0][1]];
    } else if (this.direction===Direction.LEFT){
      this.segmentPos[0] = [this.segmentPos[0][0]-1,this.segmentPos[0][1]];
    } else if (this.direction===Direction.UP){
      this.segmentPos[0] = [this.segmentPos[0][0],this.segmentPos[0][1]-1];
    } else if (this.direction===Direction.DOWN){
      this.segmentPos[0] = [this.segmentPos[0][0]-1,this.segmentPos[0][1]+1];
    }
    // Implementierung der Logik für die Bewegung
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
    // Implementierung der Logik für die Kollisionserkennung
    console.log("Kollision wird überprüft...");
  }

  // Funktion zum Essen
  eat(numbersList: number[][]): boolean {
    // Implementierung der Logik für das Essen
    for (let i =  0; i <= numbersList.length - 1; i++) {
      if (this.segmentPos[0] === numbersList[i]){
        return true;
      }
    }
    return false;
    // Implementierung der Logik für das Essen
    console.log("Die Schlange isst...");
  }
}
