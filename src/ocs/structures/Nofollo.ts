import { sustantives } from "../dictionary/sustantives.js";
import { emoji_sustantives } from "../dictionary/emoji-sustantives.js";
import Structure from "../shared/Structure.js";
import { getRandom, probability } from "../shared/utils.js";
import Article from "../wordTypes/Article.js";

export default class Nofollo implements Structure {
    constructor(
        private emojis?: number,
    ){
        this.generate();
    }

    private value: string;

    private generate(): void {
        let sustantive = getRandom(sustantives);
        if (this.emojis && probability(this.emojis / 100)) {
            sustantive = getRandom(emoji_sustantives);
        }
        sustantive.setNumber(getRandom(['p', 's']));
        const article = new Article(sustantive);
        const fotents = [
            'fotent amb',
            'actiu amb',
            'activant',
            'respecta',
            'investiga',
            'balla amb',
        ];
        const fotent = getRandom(fotents);
        this.value = `${fotent} ${article.print()} ${sustantive.print()}`;
    }

    public print(): string {
        return this.value;
    }
}