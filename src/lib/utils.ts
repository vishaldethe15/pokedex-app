import { PokemonDetailProps } from "./types";

export const fetchWithTimeout = async (url: string, timeout = 20000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
};

export const formatPokemonData = (data: any): PokemonDetailProps => {
  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
    types: data.types.map((t: any) => t.type.name),
    abilities: data.abilities.slice(0, 4).map((a: any) => a.ability.name),
    stats: data.stats.map((s: any) => ({
      name: s.stat.name,
      value: s.base_stat,
    })),
    moves: data.moves.slice(0, 4).map((m: any) => m.move.name),
  };
};
