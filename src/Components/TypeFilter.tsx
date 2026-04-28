import { usePokemonStore } from "../store/useStore";

const TypeFilter = () => {
  const types = ["fire", "water", "electric", "grass"];
  const { type, setType } = usePokemonStore();

  return (
    <div>
      <select
        className="w-full p-2 border rounded mb-4"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">All Types</option>
        {types.map((t) => (
          <option value={t} key={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilter;
