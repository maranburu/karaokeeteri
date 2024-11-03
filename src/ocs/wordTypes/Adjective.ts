import Word from "../shared/Word.js";
import Pluralizer from "../utils/pluralizer.js";

export default class Adjective implements Word {
    constructor(
        private readonly _fullRoot: string,
        private _gender?: string,
        private _number?: string,
    ){
    }

    print(): string {
       return Pluralizer.pluralize(this);
    }

    setGender(gender: string) {
        this._gender = gender;
    }

    setNumber(number: string) {
        this._number = number;
    }

    get root(): string {
        const [m,f] = this._fullRoot.split('|');
        return `${this._gender === 'f' ? f : m}`;
    }

    get gender(): string {
        return this._gender;
    }

    get number(): string {
        return this._number;
    }
}