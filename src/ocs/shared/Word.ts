import Gendered from "./Gendered.js";
import Numbered from "./Numbered.js";

interface Word extends Gendered, Numbered {
    print(): string;
    get root(): string;
}

export default Word;