export class Logic {

    private static LogicInstance: Logic = new Logic();

    wort: string = "";
    
    counter: number = 0;

    benutzteChars: string[] = [];
    benutzteFalscheChars: string[] = [];
    wordProgess: string[] = [];

    public static getInstance(): Logic{
        return this.LogicInstance;
    }

    checkChar(char: string): boolean {
        return false;
    }

    generateWordProgress(): void {
        
    }

    getWordProgress(): string[] {
        return this.wordProgess;
    }
}
