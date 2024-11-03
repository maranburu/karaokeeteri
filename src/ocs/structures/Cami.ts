import { sustantives } from "../dictionary/sustantives.js";
import Structure from "../shared/Structure";
import { getRandom } from "../shared/utils.js";

export default class Cami implements Structure {
  constructor(
  ){
      this.generate();
  }

  private value: string;

  private generate(): void {
    let sustantive = getRandom(sustantives);
    let sustantive2 = getRandom(sustantives);
    this.value = `me haré una ${sustantive.print()} con tu ${sustantive2.print()}`;
  }

  public print(): string {
    return this.value;
  }
}