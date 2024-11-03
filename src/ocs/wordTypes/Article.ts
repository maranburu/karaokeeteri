import Word from "../shared/Word.js";

export default class Article {
    constructor(
        private readonly word: Word,
    ){}

    private get firstLetterIsVocal(): boolean {
        return !!(['a','e','i','o','u','h','A','E','I','O','U','H'].find(l => l === this.word.root[0]));
    }

    private get article(): string {
        if (this.firstLetterIsVocal) {
            if (this.word.gender === 'm' && this.word.number === 's') return 'l\'';
        }
        if (this.word.gender === 'm' && this.word.number === 's') return 'el ';
        if (this.word.gender === 'm' && this.word.number === 'p') return 'els ';
        if (this.word.gender === 'f' && this.word.number === 's') return 'la ';
        if (this.word.gender === 'f' && this.word.number === 'p') return 'les ';
        return '-';
    }

    print(): string {
        return this.article;
    }
}
