import { behemothBlade, playRough, protect, sacredSword } from "../../moves/moves.ts";
import { Moveset } from "../../moves/moveset.ts";
import { BaseStats, EV, IV } from "../../stats/mod.ts"
import { Pokemon } from "../mod.ts";

export class Zacian extends Pokemon {
  constructor(iv: IV, ev: EV, level: number) {
    super('Zacian', 'Fairy', 'Steel', new BaseStats([ 92, 170, 115, 80, 115, 148 ]), iv, ev, level, new Moveset(behemothBlade, sacredSword, playRough, protect));
  }
}