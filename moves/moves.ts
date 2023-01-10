import { Move } from "./move.ts";

export const none = new Move('None', 0, 0, 'None', 'None');

export const behemothBlade = new Move('Behemoth Blade', 100, 100, 'Steel', 'Physical');
export const dragonClaw = new Move('Dragon Claw', 80, 100, 'Dragon', 'Physical');
export const thunderFang = new Move('Thunder Fang', 65, 95, 'Electric', 'Physical');
export const dragonTail = new Move('Dragon Tail', 60, 90, 'Dragon', 'Physical');
export const playRough = new Move('Play Rough', 90, 100, 'Fairy', 'Physical');
export const protect = new Move('Protect', 0, 0, 'Normal', 'Physical');
export const sacredSword = new Move('Sacred Sword', 90, 100, 'Fighting', 'Physical');
export const surf = new Move('Surf', 90, 100, 'Water', 'Special');
