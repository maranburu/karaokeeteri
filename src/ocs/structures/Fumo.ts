import { sustantives } from "../dictionary/sustantives.js";
import { emoji_sustantives } from "../dictionary/emoji-sustantives.js";
import Structure from "../shared/Structure.js";
import Places from "../wordTypes/Place.js";
import { getRandom, probability } from "../shared/utils.js";

export default class Fumo implements Structure {
    constructor(
        private emojis?: number,
    ){
        this.generate();
    }

    private value: string;

    private getVerb(): string {
        let verb = 'fumo'
        if (probability(0.1)) {
            verb = 'xuclo'
        }
        if (probability(0.1)) {
            verb = 'esnifo'
        }
        if (probability(0.1)) {
            verb = 'volco'
        }
        if (probability(0.1)) {
            verb = `amb tu ${verb}`;
        }
        if (probability(0.1)) {
            verb = `per això ${verb}`;
        }
        if (probability(0.1)) {
            verb = `per tu ${verb}`;
        }
        return verb;
    }

    private generate(): void {
        const number = getRandom(['s','p']);
        let sustantive = getRandom(sustantives);
        if (this.emojis && probability(this.emojis / 100)) {
            sustantive = getRandom(emoji_sustantives);
        }
        sustantive.setNumber(number);
        let sustantive2 = getRandom(sustantives);
        if (this.emojis && probability(this.emojis / 100)) {
            sustantive2 = getRandom(emoji_sustantives);
        }
        while (sustantive.root === sustantive2.root) { // Remove duplicates
            sustantive2 = getRandom(sustantives);
            if (this.emojis && probability(this.emojis / 100)) {
                sustantive2 = getRandom(emoji_sustantives);
            }
        }
        sustantive2.setNumber('s');
        let verb = this.getVerb();
        this.value = (`${verb} ${sustantive.print()} de ${sustantive2.print()}`);
        if (probability(0.1)) {
            this.value += ` ${Places.getRandom().root}`;
        }
    }

    public print(): string {
        return this.value;
    }
}