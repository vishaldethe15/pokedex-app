"use client";
import Image from "next/image";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="w-full max-w-sm px-4 py-2 flex items-center gap-4 rounded-2xl border-2 border-neutral-900 text-neutral-800 ">
      <Image src={"/pokeicon.png"} alt="poke icon" width={20} height={20} />
      <input
        type="text"
        placeholder="Search Pokémon by Name or ID..."
        value={search}
        onChange={handleChange}
        className="w-full focus:outline-none "
      />
    </div>
  );
};

export default SearchBar;
