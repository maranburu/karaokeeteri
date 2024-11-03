import { sustantives } from "../dictionary/sustantives.js";
import { emoji_sustantives } from "../dictionary/emoji-sustantives.js";
import Structure from "../shared/Structure.js";
import { getRandom, probability } from "../shared/utils.js";
import Article from "../wordTypes/Article.js";

export default class Mamimou implements Structure {
    constructor(
        private emojis?: number,
    ){
        this.generate();
    }

    private value: string;

    private generate(): void {
        let sustantive = getRandom(sustantives);
        sustantive.setNumber('s');
        let verb = getRandom(['mou', 'mou', 'regala\'m', 'questiona\'t', 'goza']);
        let sustantive2;
        sustantive2 = getRandom(sustantives);
        if (this.emojis && probability(this.emojis / 100)) {
            sustantive2 = getRandom(emoji_sustantives);
        }
        const article = new Article(sustantive2);
        this.value = `${sustantive.print()}, ${verb} ${article.print()} ${sustantive2.print()}`;
    }

    public print(): string {
        return this.value;
    }
}