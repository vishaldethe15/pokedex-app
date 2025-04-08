"server only";

import { cache } from "react";
import pLimit from "p-limit";

import { PokemonCardProps } from "./types";
import { fetchWithTimeout } from "./utils";

const API_URL = process.env.NEXT_PUBLIC_POKE_API;

const rateLimit = pLimit(5);

export const getAllPokemons = cache(
  async ({
    query,
    page = 1,
    limit = 30,
  }: {
    query?: string;
    page?: number;
    limit?: number;
  } = {}): Promise<PokemonCardProps[] | undefined> => {
    const apiUrl = `${API_URL}?limit=${limit}&offset=${(page - 1) * 20}`;

    try {
      const res = await fetchWithTimeout(apiUrl);
      if (!res.ok) throw new Error("Failed to fetch Pokémon list");
      const data = await res.json();

      const filteredResults = query
        ? data.results
            .filter((pokemon: { name: string }) =>
              pokemonInQuery(pokemon.name, query.toLowerCase())
            )
            .slice(0, 20)
        : data.results;

      const detailedData = await Promise.all(
        filteredResults.map((pokemon: any) =>
          rateLimit(async () => {
            const res = await fetchWithTimeout(pokemon.url, 8000);
            if (!res.ok) throw new Error(`Failed to fetch ${pokemon.name}`);
            const details = await res.json();

            return {
              id: details.id,
              name: details.name,
              image: details.sprites.other["official-artwork"].front_default,
              types: details.types.map((t: any) => t.type.name),
            };
          })
        )
      );

      return detailedData;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
);

const pokemonInQuery = (name: string, query: string) => {
  return name.toLowerCase().startsWith(query);
};
