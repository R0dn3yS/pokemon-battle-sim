import { Garchomp } from './pokemon/species/garchomp.ts';
import { IV, EV } from './stats/mod.ts';

const iv = new IV([ 24, 12, 30, 16, 23, 5 ]);
const ev = new EV([ 74, 190, 91, 48, 84, 23 ]);

const garchomp = new Garchomp(iv, ev, 78);

console.log(garchomp.stats);