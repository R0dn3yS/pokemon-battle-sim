import { Battle } from './battle/mod.ts';
import { Garchomp } from './pokemon/species/garchomp.ts';
import { Zacian } from "./pokemon/species/zacian.ts";
import { IV, EV } from './stats/mod.ts';

const iv = new IV([ 31, 31, 31, 31, 31, 31 ]);
const ev = new EV([ 236, 4, 4, 0, 12, 252 ]);

const zacian = new Zacian(iv, ev, 50);

const battle = new Battle(zacian, zacian);

console.log(zacian);
console.log(zacian.attack(0, zacian));