export const types = [ 'Normal', 'Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy', 'None' ];

export class Type {
  type: string;
  typeIndex: number;

  constructor(type: string) {
    this.type = type;
    this.typeIndex = types.indexOf(type);
  }
}