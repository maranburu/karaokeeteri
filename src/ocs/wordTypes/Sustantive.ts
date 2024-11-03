import Word from "../shared/Word.js";
import Pluralizer from "../utils/pluralizer.js";

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
}