import { BaseStats, EV, IV } from "../../stats/mod.ts"
import { Pokemon } from "../mod.ts";

export class Garchomp extends Pokemon {
  base = new BaseStats([ 108, 130, 95, 80, 85, 102 ]);

  constructor(iv: IV, ev: EV, level: number) {
    super('Garchomp', 'Dragon', 'Ground', new BaseStats([ 108, 130, 95, 80, 85, 102 ]), iv, ev, level);
  }
}