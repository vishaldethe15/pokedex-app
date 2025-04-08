import CardList from "@/components/CardList";
import { getAllPokemons } from "@/lib/data";
import React from "react";

const HomePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const { query } = await searchParams;

  return (
    <div>
      <CardList query={query} />
    </div>
  );
};

export default HomePage;
