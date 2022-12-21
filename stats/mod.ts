export class Stats {
  hp: number;
  // atk: number;
  // def: number;
  // spatk: number;
  // spdef: number;
  // spd: number;

  constructor(base: BaseStats, iv: IV, ev: EV, level: number) {
    this.hp = (Math.floor(((2 * base.hp + iv.hp + (Math.floor(ev.hp / 4))) * level) / 100)) + (level + 10);
    // this.atk = ()
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