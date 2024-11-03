import { adjectives } from "../dictionary/adjectives.js";
import { sustantives } from "../dictionary/sustantives.js";
import { emoji_sustantives } from "../dictionary/emoji-sustantives.js";
import Structure from "../shared/Structure.js";
import { getRandom, probability } from "../shared/utils.js";
import Article from "../wordTypes/Article.js";

export default class Lenigmatic implements Structure {
    constructor(
        private emojis?: number,
    ){
        this.generate();
    }

    private value: string;

    private generate(): void {
        const number = getRandom(['s','p']);
        let sustantive = getRandom(sustantives);
        if (this.emojis && probability(this.emojis / 100)) {
            sustantive = getRandom(emoji_sustantives);
        }
        sustantive.setNumber(number);
        const adjective = getRandom(adjectives);
        adjective.setGender(sustantive.gender);
        adjective.setNumber(number);
        const article = new Article(adjective);
        this.value = (`${article.print()}${adjective.print()} ${sustantive.print()}`);
        if (probability(0.2)) {
            let sustantive2;
            sustantive2 = getRandom(sustantives);
            if (this.emojis && probability(this.emojis / 100)) {
                sustantive2 = getRandom(emoji_sustantives);
            }
            while (sustantive.root === sustantive2.root) { // Remove duplicates
                sustantive2 = getRandom(sustantives);
                if (this.emojis && probability(this.emojis / 100)) {
                    sustantive2 = getRandom(emoji_sustantives);
                }
            }
            this.value += ` de ${sustantive2.print()}`;
        }
    }

    public print(): string {
        return this.value;
    }
}
