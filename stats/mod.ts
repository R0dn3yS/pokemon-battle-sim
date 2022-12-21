export class Stats {
  hp: number;
  atk: number;
  def: number;
  spatk: number;
  spdef: number;
  spd: number;

  constructor(base: BaseStats, iv: IV, ev: EV, level: number) {
    this.hp = (Math.floor(((2 * base.hp + iv.hp + (Math.floor(ev.hp / 4))) * level) / 100)) + (level + 10);
    this.atk = (Math.floor((((2 * base.atk) + iv.atk + (Math.floor(ev.atk / 4))) * level) / 100)) + 5;
    this.def = (Math.floor((((2 * base.def) + iv.def + (Math.floor(ev.def / 4))) * level) / 100)) + 5;
    this.spatk = (Math.floor((((2 * base.spatk) + iv.spatk + (Math.floor(ev.spatk / 4))) * level) / 100)) + 5;
    this.spdef = (Math.floor((((2 * base.spdef) + iv.spdef + (Math.floor(ev.spdef / 4))) * level) / 100)) + 5;
    this.spd = (Math.floor((((2 * base.spd) + iv.spd + (Math.floor(ev.spd / 4))) * level) / 100)) + 5;
  }
}

export class IV {
  hp: number;
  atk: number;
  def: number;
  spatk: number;
  spdef: number;
  spd: number;

  constructor(stats: number[]) {
    this.hp = stats[0];
    this.atk = stats[1];
    this.def = stats[2];
    this.spatk = stats[3];
    this.spdef = stats[4];
    this.spd = stats[5];
  }
}

export class BaseStats {
  hp: number;
  atk: number;
  def: number;
  spatk: number;
  spdef: number;
  spd: number;

  constructor(stats: number[]) {
    this.hp = stats[0];
    this.atk = stats[1];
    this.def = stats[2];
    this.spatk = stats[3];
    this.spdef = stats[4];
    this.spd = stats[5];
  }
}

export class EV {
  hp: number;
  atk: number;
  def: number;
  spatk: number;
  spdef: number;
  spd: number;

  constructor(stats: number[]) {
    this.hp = stats[0];
    this.atk = stats[1];
    this.def = stats[2];
    this.spatk = stats[3];
    this.spdef = stats[4];
    this.spd = stats[5];
  }
}
