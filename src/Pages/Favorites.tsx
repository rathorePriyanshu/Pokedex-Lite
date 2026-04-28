import { usePokemonStore } from "../store/useStore";
import { usePokemonList } from "../hooks/usePokemonList";
import PokemonGrid from "../Components/PokemonGrid";
import SkeletonGrid from "../Components/UI/SkeletonGrid";

const Favorites = () => {
  const { favourites } = usePokemonStore();
  const listQuery = usePokemonList();

  const allPokemon = listQuery.data?.pages.flatMap((p) => p.results) || [];

  const favList = allPokemon.filter((p) => {
    const id = Number(p.url.split("/").filter(Boolean).pop());
    return favourites.includes(id);
  });

  if (listQuery.isError) {
    return (
      <>
        <div className="text-center mt-10">
          <p className="text-red-500 mb-2">
            Unable to load favorites, Your favorites are saved, but we couldn’t
            fetch details.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {favourites.map((id) => (
            <span
              key={id}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm"
            >
              #{id}
            </span>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full mx-auto px-4 sm:px-8 py-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Your Favorites</h2>
          <p className="text-sm text-gray-500 mt-1">
            Your saved Pokémon collection
          </p>
        </div>

        {listQuery.isLoading ? (
          <SkeletonGrid />
        ) : favList.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center mt-48">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              No favorites yet
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              Start adding Pokémon to your favorites list
            </p>
          </div>
        ) : (
          <PokemonGrid data={favList} onSelect={() => {}} />
        )}
      </div>
    </div>
  );
};

export default Favorites;
