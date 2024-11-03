import { adlibs } from "../dictionary/adlibs";
import { getRandom } from "../shared/utils";

export default class Adlib {
    constructor(
        private readonly _root: string,
    ){
    }

    get root(): string {
        return this._root;
    }

    static getRandom(): Adlib {
        return new Adlib(getRandom(adlibs));
    }
}