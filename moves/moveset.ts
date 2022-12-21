import { Move } from "./move.ts";
import { none } from "./moves.ts";

export class Moveset {
  moves: Move[] = [];

  constructor(moveOne: Move, moveTwo = none, moveThree = none, moveFour = none) {
    this.moves[0] = moveOne;
    this.moves[1] = moveTwo;
    this.moves[2] = moveThree;
    this.moves[3] = moveFour;
  }
}