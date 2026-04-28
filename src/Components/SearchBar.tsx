import { usePokemonStore } from "../store/useStore";

const SearchBar = () => {
  const { search, setSearch } = usePokemonStore();
  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon..."
        className="w-full p-2 border rounded mb-4"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
};

export default SearchBar;
