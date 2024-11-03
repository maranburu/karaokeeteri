import { places } from "../dictionary/places";
import { getRandom } from "../shared/utils";

export default class Place {
    constructor(
        private readonly _root: string,
    ){
    }

    get root(): string {
        return this._root;
    }

    static getRandom(): Place {
        return new Place(getRandom(places));
    }
}