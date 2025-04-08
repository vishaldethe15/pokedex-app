import { typeColors } from "@/lib/constants";
import { PokemonDetailProps } from "@/lib/types";
import Image from "next/image";
import React from "react";

const PokemonDetails: React.FC<{ pokemon: PokemonDetailProps }> = ({
  pokemon,
}) => {
  return (
    <div className="max-w-3xl w-full mx-auto rounded-2xl bg-white  p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={120}
          height={120}
          className="rounded-xl bg-amber-50"
        />

        <div>
          <h2 className="text-3xl font-bold capitalize text-neutral-800">
            {pokemon.name}
          </h2>
          <p className="text-sm text-gray-500">ID: #{pokemon.id}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className={`text-xs px-3 py-1 rounded-full font-medium capitalize ${
                  typeColors[type] || "bg-gray-200 text-gray-800"
                }`}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-neutral-800">Abilities</h3>
        <div className="flex gap-2 flex-wrap mt-2">
          {pokemon.abilities.map((ability) => (
            <span
              key={ability}
              className="text-sm capitalize px-3 py-1 bg-green-100 text-green-700 rounded-full"
            >
              {ability}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-neutral-800 mb-2">Stats</h3>
        <div className="space-y-3">
          {pokemon.stats.map((stat) => (
            <div key={stat.name}>
              <div className="flex justify-between text-sm text-gray-600 mb-1 capitalize">
                <span>{stat.name}</span>
                <span>{stat.value}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-amber-400 h-2 rounded-full"
                  style={{ width: `${Math.min(stat.value, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-neutral-800 mb-2">Moves</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {pokemon.moves.map((move) => (
            <li key={move} className="capitalize">
              {move}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default PokemonDetails;
