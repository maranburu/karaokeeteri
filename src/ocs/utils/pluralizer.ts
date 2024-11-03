import Word from "../shared/Word.js";

export default class Pluralizer {
    constructor(){}

    private static lastLetterIs(root: string, letter: string): boolean {
        return root[root.length-1] === letter;
    }

    private static lastLettersAre(root: string, letters: string): boolean {
        return root[root.length-1] === letters[1] && root[root.length-2] === letters[0];
    }

    private static removeLastLetters(root: string, letters: number): string {
        return root.substring(0, (root.length - letters));
    }

    public static pluralize(word: Word) {
        if (word.number !== 'p') return word.root;
        if (this.lastLettersAre(word.root, 'ca') && word.gender === 'f') {
            return `${this.removeLastLetters(word.root, 2)}ques`;
        }
        if (this.lastLettersAre(word.root, 'ga') && word.gender === 'f') {
            return `${this.removeLastLetters(word.root, 2)}gues`;
        }
        if (this.lastLetterIs(word.root, 'c') && word.gender === 'f') {
            return `${this.removeLastLetters(word.root, 1)}ques`;
        }
        if (this.lastLetterIs(word.root, 's')) {
            const root = word.root.replace('òs', 'os');
            if (word.gender === 'f') return `${root}es`;
            return `${root}os`;
        }
        if (this.lastLetterIs(word.root, 'a')) {
            return `${this.removeLastLetters(word.root, 1)}es`;
        }
        if (this.lastLetterIs(word.root, 'x')) {
            return `${this.removeLastLetters(word.root, 1)}es`;
        }
        if (this.lastLetterIs(word.root, 'à')) {
            return `${this.removeLastLetters(word.root, 1)}ans`;
        }
        return `${word.root}s`;
    }
}