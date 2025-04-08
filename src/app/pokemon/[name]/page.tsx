import PokemonDetails from "@/components/PokemonDetails";
import { getSinglePokemon } from "@/lib/data";
import React from "react";

const PokemonPage = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const { name } = await params;

  const pokemon = await getSinglePokemon({ name });

  if (pokemon == undefined || pokemon.length == 0) {
    return <h3>No data Available...</h3>;
  }

  return <PokemonDetails pokemon={pokemon} />;
};

export default PokemonPage;
