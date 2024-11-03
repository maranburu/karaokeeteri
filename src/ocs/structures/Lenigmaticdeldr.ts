/* articulo + adjetivo + sustantivo + adjetivo? + del + doctor/señor + sustantivo + adjetivo
 */

import { adjectives } from "../dictionary/adjectives.js";
import { sustantives } from "../dictionary/sustantives.js";
import Lenigmatic from "./Lenigmatic.js";
import { getRandom, probability, capitalize } from "../shared/utils.js";
import { emoji_sustantives } from "../dictionary/emoji-sustantives.js";

export default class Lenigmaticdeldr {
    constructor(
        private emojis?: number,
    ){
        this.generate();
    }

    private value: string;

    private getDr() {
        let adj = '';
        let dr;
        if (probability(0.2)) {
            adj = getRandom(['Venerable', 'Respectable', 'Intrèpid']);
        }
        if (probability(0.1)) {
            dr = 'Inspector';
        } else if (probability(0.1)) {
            dr = 'Professor';
        } else if (probability(0.1)) {
            dr = 'Venerable';
        } else {
            dr = 'Dr.';
        }
        return `${adj} ${dr}`;
    }

    private generate(): void {
        const lenigmatic = new Lenigmatic(this.emojis);
        let sustantive = getRandom(sustantives);
        if (this.emojis && probability(this.emojis / 100)) {
            sustantive = getRandom(emoji_sustantives);
        }
        sustantive.setNumber('s');
        const adjective = getRandom(adjectives);
        adjective.setGender(sustantive.gender);
        adjective.setNumber('s');
        this.value = `${lenigmatic.print()} del ${this.getDr()} ${capitalize(sustantive.print())} ${capitalize(adjective.print())}`;
    }

    public print(): string {
        return this.value;
    }
}
