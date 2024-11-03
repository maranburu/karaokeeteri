import Structure from "../shared/Structure";
import { probability } from "../shared/utils";
import Lenigmatic from "./Lenigmatic";

export default class Title implements Structure {
    constructor(
    ){
        this.generate();
    }

    private value: string;

    private generate(): void {
        let songType = "La cançó";
        if (probability(0.2)) {
            songType = "La balada";
        }
        if (probability(0.1)) {
            songType = "El rap";
        }
        if (probability(0.1)) {
            songType = "La bachata";
        }
        if (probability(0.1)) {
            songType = "La habanera";
        }
        if (probability(0.1)) {
            songType = "La sardana";
        }
        if (probability(0.1)) {
            songType = "L'himne";
        }
        let title = `${songType} de ${new Lenigmatic().print()}`;
        title = title.replace("de els", "dels");
        title = title.replace("de el", "del");
        title = title.replace("de l'", "del ");
        this.value = `${title}`;
    }

    public print(): string {
        return this.value;
    }
}