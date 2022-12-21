import { Pokemon } from './pokemon/mod.ts';
import { BaseStats, IV, EV } from './stats/mod.ts';

const base = new BaseStats([ 108, 130, 95, 80, 85, 102 ]);
const iv = new IV([ 24, 12, 30, 16, 23, 5 ]);
const ev = new EV([ 74, 190, 91, 48, 84, 23 ]);

const garchomp = new Pokemon('garchomp', 'Dragon', 'Ground', base, iv, ev, 78);

console.log(garchomp.stats.hp);