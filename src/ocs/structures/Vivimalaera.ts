import { sustantives } from "../dictionary/sustantives.js";
import Structure from "../shared/Structure";
import { getRandom, probability } from "../shared/utils.js";
import Article from "../wordTypes/Article.js";

export default class Vivimalaera implements Structure {
  constructor(
  ){
      this.generate();
  }

  private value: string;

  private generate(): void {
    let sustantive = getRandom(sustantives);
    sustantive.setNumber('s');
    const del = sustantive.gender === 'm' ? 'del' : 'de la';
    let sustantive2 = getRandom(sustantives);
    sustantive2.setNumber('s');
    this.value = `vivim a la era ${del} ${sustantive.print()} de ${sustantive2.print()}`;
    if (probability(0.3)) {
      this.value = `vivim a la era ${del} ${sustantive.print()} i ${new Article(sustantive2).print()} ${sustantive2.print()}`;
    }
  }

  public print(): string {
    return this.value;
  }
}