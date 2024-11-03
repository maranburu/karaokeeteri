import Structure from "../shared/Structure";
import { getRandom, isVocal, probability } from "../shared/utils";
import { sustantives } from "../dictionary/sustantives.js";

export default class Paraula implements Structure {
    constructor(
    ){
        this.generate();
    }

    private value: string;

    private generate(): void {
        const sustantive = getRandom(sustantives);
        let sustantive2 = getRandom(sustantives);
        while (sustantive.root === sustantive2.root) {
            sustantive2 = getRandom(sustantives);
        }
        const ellipsisProbability = probability(0.4);
        const ellipsis = ellipsisProbability ? '...' : '';
        this.value = `${sustantive.root}${ellipsis}`;
        if (probability(0.1)) {
            this.value = `${this.value} ${sustantive.root}?`;
        } else if (probability(0.3)) {
            this.value = `${this.value} ${sustantive2.root}?`;
        } else if (probability(0.3)) {
            this.value = `${this.value} ${sustantive2.root}!`;
        }
        if (probability(0.1)) {
            this.value = `${sustantive.root} i ${sustantive2.root}${ellipsis}`;
        } else if (probability(0.2)) {
            const sustantive2StartsWithVocal = isVocal(sustantive2.root[0]);
            const d = sustantive2StartsWithVocal ? 'd\'' : 'de ';
            this.value = `${sustantive.root} ${d}${sustantive2.root}${ellipsis}`;
        }
        if (probability(0.1)) {
            const paraula2 = new Paraula();
            this.value = `${this.value} (${paraula2.print()})`;
        }
    }

    public print(): string {
        return this.value;
    }
}