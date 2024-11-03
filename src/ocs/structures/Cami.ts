import Structure from "../shared/Structure";
import Sustantive from "../wordTypes/Sustantive.js";

export default class Cami implements Structure {
  constructor(
  ){
      this.generate();
  }

  private value: string;

  private generate(): void {
    let sustantive = Sustantive.get('f');
    let sustantive2 = Sustantive.get();
    this.value = `me haré una ${sustantive.print()} con tu ${sustantive2.print()}`;
  }

  public print(): string {
    return this.value;
  }
}