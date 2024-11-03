import Name from "@/ocs/wordTypes/Name.js";
import Title from "@/ocs/structures/Title.js";
import Line from "@/ocs/structures/Line.js";

const LINES_IN_SCREEN = 6;

export default class Song {
    private _artist1: Name;
    private _artist2: Name;
    private _title: string;
    private _lines: { value: string, id: number }[];
    private _counter: number;

    private _lineLength: number | null; // experimental

    constructor( ) {
        this.init();
    }

    private init() {
        this._artist1 = Name.getRandom();
        this._artist2 = Name.getRandom();
        this._title = new Title().print();
        this._lines = [];
        for (let i = 0; i < LINES_IN_SCREEN; i++) {
            this._lines.push(Song.emptyLine());
        }
        this._counter = 0;
    }

    static emptyLine() {
        return {
            value: ' ',
            id: Math.random()
        };
    };

    get artist1(): Name {
        return this._artist1;
    }

    get artist2(): Name {
        return this._artist2;
    }

    get title(): string {
        return this._title;
    }

    public getTitle() {
        return this._title;
    }

    public getLines() {
        return this._lines;
    }

    private lineUntil(b: number) {
        return this._counter  <= b;
    }

    public getSection() {
        if (this.lineUntil(2)) {
            return `[Intro: ${this.artist1.root} & ${this.artist2.root}]`;
        }
        if (this.lineUntil(8)) {
            return `[Verse 1: ${this.artist2.root}]`;
        }
        if (this.lineUntil(12)) {
            return `[Chorus : ${this.artist2.root}]`;
        }
        if (this.lineUntil(18)) {
            return `[Verse 2: ${this.artist2.root}]`;
        }
        if (this.lineUntil(22)) {
            return `[Chorus : ${this.artist2.root}]`;
        }
        if (this.lineUntil(24)) {
            return `[Bridge: ${this.artist1.root} & ${this.artist2.root}]`;
        }
        if (this.lineUntil(30)) {
            return `[Verse 3: ${this.artist2.root}]`;
        }
        if (this.lineUntil(34)) {
            return `[Outro: ${this.artist2.root}]`;
        }
        return '';
    }

    public newLine(
        emojis: number,
        vocals: number
    ) {
        if (this._counter > 34) {
            this.init();
            return;
        }
        if (this._lines.length > LINES_IN_SCREEN) { 
            this._lines.shift();
        }
        
        let newLine = Line.get(emojis, vocals);
        if (this._lineLength) {
            while (newLine.length !== this._lineLength) {
                newLine = Line.get(emojis, vocals);
            }
        }

        this._lines.push({ value: newLine, id: Math.random()});
        this._counter += 1;
    }
}