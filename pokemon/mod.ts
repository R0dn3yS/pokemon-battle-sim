import { BaseStats, EV, IV, Stats } from "../stats/mod.ts";
import { Type } from "../types/mod.ts";

export class Pokemon {
  species: string;
  primaryType: Type;
  secondaryType: Type;
  stats: Stats;
  level: number;

  constructor(species: string, primaryType: string, secondaryType = 'None', base: BaseStats, iv: IV, ev: EV, level:number) {
    this.species = species;
    this.primaryType = new Type(primaryType);
    this.secondaryType = new Type(secondaryType);
    this.stats = new Stats(base, iv, ev, level);
    this.level = level;
  }
}