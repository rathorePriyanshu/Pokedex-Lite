import { useMemo, useState } from "react";
import PokemonGrid from "../Components/PokemonGrid";
import SearchBar from "../Components/SearchBar";
import TypeFilter from "../Components/TypeFilter";
import { usePokemonList } from "../hooks/usePokemonList";
import { usePokemonType } from "../hooks/usePokemonType";
import { usePokemonStore } from "../store/useStore";
import type { PokemonListItempAPI, PokemonTypeItemAPI } from "../types/pokemon";
import { useDebounceSearch } from "../hooks/useDebounce";
import PokemonModal from "../Components/PokemonModal";
import SkeletonGrid from "../Components/UI/SkeletonGrid";

const Home = () => {
  const { type, search } = usePokemonStore();
  const debounced = useDebounceSearch(search);
  const isSearching = debounced.length > 0;

  const listQuery = usePokemonList();
  const typeQuery = usePokemonType(type);

  const [selected, setSelected] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const noramlizedPokemonList: PokemonListItempAPI[] = type
      ? (typeQuery.data?.pokemon.map((p: PokemonTypeItemAPI) => p.pokemon) ??
        [])
      : (listQuery.data?.pages.flatMap((p) => p.results) ?? []);

    return noramlizedPokemonList.filter((p) =>
      p.name.toLowerCase().includes(debounced.toLowerCase()),
    );
  }, [type, typeQuery.data, listQuery.data, debounced]);

  if (listQuery.isError || typeQuery.isError) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 mb-2">Failed to load Pokemons</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full mx-auto px-4 sm:px-8 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">PokeDex Lite</h1>
          <p className="text-sm text-gray-500 mt-1">
            Explore and discover your favorite Pokémon
          </p>
        </div>

        <div className="flex w-full flex-col sm:flex-row gap-1 sm:gap-3 mb-5">
          <div className="sm:w-1/2 sm:flex-none flex-1">
            <SearchBar />
          </div>
          <div className="w-full sm:w-48">
            <TypeFilter />
          </div>
        </div>

        {type && (
          <p className="text-sm text-gray-500 mb-4">
            Showing all <span className="font-medium capitalize">{type}</span>{" "}
            Pokémon
          </p>
        )}

        {isSearching && (
          <p className="text-sm text-gray-500 mb-4">
            Showing results from loaded Pokémon only
          </p>
        )}

        {listQuery.isLoading || typeQuery.isLoading ? (
          <SkeletonGrid />
        ) : (
          <PokemonGrid data={filtered} onSelect={setSelected} />
        )}

        {!type && !isSearching && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => listQuery.fetchNextPage()}
              className="bg-red-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-200"
            >
              Load More
            </button>
          </div>
        )}

        {selected && (
          <PokemonModal name={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </div>
  );
};

export default Home;
