import { PokemonListProps } from "@/lib/types";
import Card from "./Card";

const CardList = ({ pokemons }: PokemonListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 py-8">
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          name={pokemon.name}
          id={pokemon.id}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </div>
  );
};

export default CardList;
