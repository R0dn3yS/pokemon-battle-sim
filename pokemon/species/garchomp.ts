import { dragonClaw, dragonTail, surf, thunderFang } from "../../moves/moves.ts";
import { Moveset } from "../../moves/moveset.ts";
import { BaseStats, EV, IV } from "../../stats/mod.ts"
import { Pokemon } from "../mod.ts";

export class Garchomp extends Pokemon {
  constructor(iv: IV, ev: EV, level: number) {
    super('Garchomp', 'Dragon', 'Ground', new BaseStats([ 108, 130, 95, 80, 85, 102 ]), iv, ev, level, new Moveset(dragonClaw, thunderFang, dragonTail, surf));
  }
}