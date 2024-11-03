import { names, surnames } from "../dictionary/names";
import { sustantives } from "../dictionary/sustantives";
import { getRandom, probability, capitalize } from "../shared/utils";
import Article from "./Article.js";

export default class Name {
    constructor(
        private readonly _root: string,
    ){
    }

    get root(): string {
        return this._root;
    }

    static getRandom(): Name {
        const name = getRandom(names);
        const surname = getRandom(surnames);
        let nameString = '';
        if (probability(0.3)) {
            let sustantive = getRandom(sustantives);
            sustantive.setNumber('s');
            const article = new Article(sustantive);
            nameString = `${name} ${surname} "${capitalize(article.print())} ${capitalize(sustantive.print())}"`;
        } else if (probability(0.3)) {
            let sustantive = getRandom(sustantives);
            sustantive.setNumber('s');
            const article = new Article(sustantive);
            nameString = `${name} "${capitalize(article.print())} ${capitalize(sustantive.print())}" ${surname}`;
        } else {
            // Default
            nameString = `${name} ${surname}`;
        }
        return new Name(nameString);
    }
}