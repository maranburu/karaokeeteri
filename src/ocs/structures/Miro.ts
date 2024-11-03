import Structure from "../shared/Structure.js";
import { probability } from "../shared/utils.js";
import Place from "../wordTypes/Place.js";
import Fumo from "./Fumo.js";

export default class Mamimou implements Structure {
    constructor(
    ){
        this.generate();
    }

    private value: string;

    private generate(): void {
        this.value = `miro cap ${Place.getRandom().root}`;
        if (probability(0.5)) {
            this.value = `${this.value} i ${new Fumo().print()}`;
        }
    }

    public print(): string {
        return this.value;
    }
}