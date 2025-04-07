export const samplePokemons = [
  {
    name: "pikachu",
    id: 25,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    types: ["electric"],
  },
  {
    name: "bulbasaur",
    id: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["grass", "poison"],
  },
  {
    name: "charmander",
    id: 4,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    types: ["fire"],
  },
  {
    name: "squirtle",
    id: 7,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    types: ["water"],
  },
];

export const typeColors: Record<string, string> = {
  normal: "bg-gray-200 text-gray-800",
  fire: "bg-red-200 text-red-800",
  water: "bg-blue-200 text-blue-800",
  electric: "bg-yellow-200 text-yellow-800",
  grass: "bg-green-200 text-green-800",
  ice: "bg-cyan-200 text-cyan-800",
  fighting: "bg-orange-300 text-orange-900",
  poison: "bg-purple-200 text-purple-800",
  ground: "bg-yellow-300 text-yellow-900",
  flying: "bg-sky-200 text-sky-800",
  psychic: "bg-pink-200 text-pink-800",
  bug: "bg-lime-200 text-lime-800",
  rock: "bg-yellow-400 text-yellow-900",
  ghost: "bg-indigo-200 text-indigo-800",
  dragon: "bg-indigo-300 text-indigo-900",
  dark: "bg-gray-700 text-gray-100",
  steel: "bg-slate-300 text-slate-900",
  fairy: "bg-pink-300 text-pink-900",
};
