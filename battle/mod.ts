import { Pokemon } from "../pokemon/mod.ts";

export class Battle {
  pokemonOne: Pokemon;
  pokemonTwo: Pokemon;

  constructor(pokemonOne: Pokemon, pokemonTwo: Pokemon) {
    this.pokemonOne = pokemonOne;
    this.pokemonTwo = pokemonTwo;
  }
}