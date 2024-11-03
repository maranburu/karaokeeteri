import Word from "../shared/Word.js";
import Pluralizer from "../utils/pluralizer.js";
import { sustantives } from "../dictionary/sustantives.js";
import { getRandom } from "../shared/utils.js";

export default class Sustantive implements Word {
    constructor(
        private readonly _root: string,
        private readonly _gender: string,
        private _number?: string,
    ){
    }

    print(): string {
        return Pluralizer.pluralize(this);
    }

    get gender(): string {
        return this._gender;
    }

    get number(): string {
        return this._number;
    }

    get root(): string {
        return this._root;
    }

    setNumber(number: string) {
        this._number = number;
    }

    static get(gender?: string, number?: string) {
        let sustantive = getRandom(sustantives);
        sustantive.setNumber(number || 's');
        while (gender && sustantive.gender !== gender) {
            sustantive = getRandom(sustantives);
        }
        return sustantive;
    }
}