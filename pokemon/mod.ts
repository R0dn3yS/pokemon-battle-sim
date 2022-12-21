import { Moveset } from "../moves/moveset.ts";
import { BaseStats, EV, IV, Stats } from "../stats/mod.ts";
import { Type } from "../types/mod.ts";
import { typechart } from "../types/typechart.ts";

export class Pokemon {
  species: string;
  primaryType: Type;
  secondaryType: Type;
  stats: Stats;
  iv: IV;
  ev: EV;
  level: number;
  moveset: Moveset;

  constructor(species: string, primaryType: string, secondaryType = 'None', base: BaseStats, iv: IV, ev: EV, level: number, moveset: Moveset) {
    this.species = species;
    this.primaryType = new Type(primaryType);
    this.secondaryType = new Type(secondaryType);
    this.stats = new Stats(base, iv, ev, level);
    this.iv = iv;
    this.ev = ev;
    this.level = level;
    this.moveset = moveset;
  }

  attack(moveIndex: number, defendingPokemon: Pokemon): number | undefined {
    if (this.moveset.moves[moveIndex].name === 'None') return;

    const move = this.moveset.moves[moveIndex];

    const atkStat = move.moveType === 'Physical' ? this.stats.atk : this.stats.spatk;
    const defStat = move.moveType === 'Physical' ? this.stats.def : this.stats.spdef;

    const critical = Math.random() * 24 === 1 ? 1.5 : 1;
    const random = (Math.random() * (100 - 85) + 85) / 100;

    let stab = 1;
    if (move.type === this.primaryType || move.type === this.secondaryType) stab = 1.5;

    let typeEff = typechart[move.type.typeIndex][defendingPokemon.primaryType.typeIndex];
    typeEff *= typechart[move.type.typeIndex][defendingPokemon.secondaryType.typeIndex];


    if (Math.random() * 100 < move.accuracy) {
      return Math.floor(((((((2 * this.level) / 5) + 2) * move.power * atkStat / defStat) / 50) + 2) * critical * random * stab * typeEff);
    } else {
      return 0;
    }
  }
}