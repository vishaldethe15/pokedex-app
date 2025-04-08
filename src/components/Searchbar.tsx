"use client";
import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";

const SearchBar = () => {
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebounce((e) => {
    const searchQuery = e.target.value;
    const params = new URLSearchParams(searchParam);
    searchQuery.length >= 3
      ? params.set("query", searchQuery)
      : params.delete("query");
    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="bg-neutral-200 max-w-xs mx-auto md:mx-0 px-4 py-2 flex items-center gap-4 rounded-4xl text-neutral-800 ">
      <Image src={"/pokeicon.png"} alt="poke icon" width={20} height={20} />
      <input
        type="text"
        placeholder="Search Pokémon by Name..."
        onChange={handleSearch}
        className="w-full focus:outline-none "
      />
    </div>
  );
};

export default SearchBar;
