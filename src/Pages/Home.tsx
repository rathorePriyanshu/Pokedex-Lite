import PokemonGrid from "../Components/PokemonGrid";
import SearchBar from "../Components/SearchBar";
import TypeFilter from "../Components/TypeFilter";

const Home = () => {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold mb-4">PokeDex Lite</h1>

      <div className="flex gap-2 mb-4">
        <SearchBar />
        <TypeFilter />
      </div>

      <PokemonGrid />

      <button>Load More...</button>
    </div>
  );
};

export default Home;
