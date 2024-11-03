import Fumo from "./structures/Fumo.js";
import Lenigmaticdeldr from "./structures/Lenigmaticdeldr.js";

for (let i = 0; i < 10; i++) {
  const lenigmatic = new Lenigmaticdeldr();
  console.log(lenigmatic.print());
  const fumo = new Fumo();
  console.log(fumo.print());
}