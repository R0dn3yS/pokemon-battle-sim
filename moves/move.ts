import { Type } from "../types/mod.ts";

export class Move {
  name: string;
  power: number;
  accuracy: number;
  type: Type;
  moveType: string;

  constructor(name: string, power: number, accuracy: number, type: string, moveType: string) {
    this.name = name;
    this.power = power;
    this.accuracy = accuracy;
    this.type = new Type(type);
    this.moveType = moveType;
  }
}