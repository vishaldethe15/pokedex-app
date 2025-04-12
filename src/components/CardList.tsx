"use client";

import { useState, useEffect } from "react";
import { getAllPokemons } from "@/lib/data";
import { PokemonCardProps } from "@/lib/types";
import Card from "./Card";

const CardList = ({ query }: { query: string }) => {
  const [pokemonData, setPokemonData] = useState<PokemonCardProps[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPokemonData([]);
    setPage(1);
  }, [query]);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const newPokemons = await getAllPokemons({ query, page });
      setPokemonData((prev) => {
        const allPokemons = [...prev, ...(newPokemons || [])];

        const uniquePokemons = [
          ...new Map(allPokemons.map((p) => [p.id, p])).values(),
        ];

        return uniquePokemons;
      });
      setLoading(false);
    };

    fetchPokemons();
  }, [page, query]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  if (pokemonData == undefined || pokemonData.length == 0) {
    return <h3>No Pokemons Available...</h3>;
  }
  return (
    <div className="px-4 py-6">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 py-8 ">
        {pokemonData?.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              image={pokemon.image}
              types={pokemon.types}
            />
          );
        })}
      </div>
      {pokemonData.length > 10 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="px-6 py-2 cursor-pointer bg-amber-500 text-white rounded-xl shadow hover:bg-amber-600 disabled:opacity-50 disabled:bg-neutral-700"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CardList;
