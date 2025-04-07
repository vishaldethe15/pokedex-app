import CardList from "@/components/CardList";
import Navbar from "@/components/Navbar";
import { samplePokemons } from "@/lib/constants";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <CardList pokemons={samplePokemons} />
    </div>
  );
};

export default HomePage;
