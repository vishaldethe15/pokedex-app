import { typeColors } from "@/lib/constants";
import { PokemonCardProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const Card = ({ name, id, image, types }: PokemonCardProps) => {
  return (
    <div className="w-[15rem] bg-white border border-amber-400 rounded-2xl shadow-md p-4 hover:shadow-lg transition-all duration-200 ease-in-out flex flex-col items-center text-center">
      <Image src={image} alt={name} width={120} height={120} className="mb-4" />

      <Link
        href={"/"}
        className="text-xl font-semibold capitalize text-gray-800"
      >
        {name}
      </Link>

      <div className="text-sm text-gray-500 mb-2">
        #{id.toString().padStart(3, "0")}
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {types.map((type) => {
          const typeStyle = typeColors[type] || "bg-amber-100 text-amber-700"; // fallback
          return (
            <span
              key={type}
              className={`text-xs px-3 py-1 rounded-full capitalize ${typeStyle}`}
            >
              {type}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
