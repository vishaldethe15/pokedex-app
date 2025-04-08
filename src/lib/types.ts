export type PokemonCardProps = {
  name: string;
  id: number;
  image: string;
  types: string[];
};

export type PokemonListProps = {
  pokemons: PokemonCardProps[] | undefined;
};

export type PokemonDetailProps = {
  id: number;
  name: string;
  image: string;
  types: string[];
  abilities: string[];
  stats: {
    name: string;
    value: number;
  }[];
  moves: string[];
};
