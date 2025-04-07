export type PokemonCardProps = {
  name: string;
  id: number;
  image: string;
  types: string[];
};

export type PokemonListProps = {
  pokemons: PokemonCardProps[];
};
