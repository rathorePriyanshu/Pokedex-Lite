import PokemonCard from "./PokemonCard";

const PokemonGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
  );
};

export default PokemonGrid;
