import { motion } from "framer-motion";
import { usePokemonDetails } from "../hooks/usePokemonDetails";
import { mapDetails } from "../mappers/pokemonMappers";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  name: string;
  onClose: () => void;
}

const PokemonModal = ({ name, onClose }: Props) => {
  const { data, isLoading, isError } = usePokemonDetails(name);

  if (isLoading) {
    return <div className="p-4">Loading details...</div>;
  }

  if (isError || !data) {
    return <div className="p-4 text-red-500">Failed to load details</div>;
  }

  const pokemonDetails = mapDetails(data);

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
      style={{ perspective: "1000px" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ rotateY: -90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: 90, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-xl text-gray-500 hover:text-black transition"
        >
          <IoCloseOutline />
        </button>

        <h2 className="capitalize text-2xl font-bold text-gray-800 mb-4 text-center">
          {pokemonDetails.name}
        </h2>
        <div className="flex justify-center mb-4">
          <img
            src={pokemonDetails.image}
            alt="pokemon"
            className="h-28 object-contain drop-shadow-lg"
            loading="lazy"
          />
        </div>

        <div className="flex justify-center gap-2 mb-3 flex-wrap">
          {pokemonDetails.types.map((t) => (
            <span
              key={t}
              className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600 text-center mb-4">
          <span className="font-semibold text-gray-800">Abilities:</span>{" "}
          {pokemonDetails.abilities.join(", ")}
        </p>

        <div className="grid grid-cols-2 gap-2 text-sm">
          {pokemonDetails.stats.map((s) => (
            <div
              key={s.name}
              className="bg-gray-100 rounded-md px-3 py-2 flex justify-between"
            >
              <span className="capitalize text-gray-600">{s.name}</span>
              <span className="font-semibold text-gray-800">{s.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PokemonModal;
