import { Garchomp } from './pokemon/species/garchomp.ts';
import { IV, EV } from './stats/mod.ts';

const iv = new IV([ 24, 12, 30, 16, 23, 5 ]);
const ev = new EV([ 74, 190, 91, 48, 84, 23 ]);

const garchomp = new Garchomp(iv, ev, 78);

console.log(garchomp);
console.log(`The attack '${garchomp.moveset.moves[0].name}' does ${garchomp.attack(0, garchomp)} damage on itself.`)

