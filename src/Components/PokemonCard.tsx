import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import type { PokemonCardType } from "../types/pokemon";
import { usePokemonStore } from "../store/useStore";
import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  pokemon: PokemonCardType;
  onClick: () => void;
}

const PokemonCard = ({ pokemon, onClick }: Props) => {
  const { favourites, toggleFavourites } = usePokemonStore();
  const isFav = favourites.includes(pokemon.id);

  const [hasError, setHasError] = useState(false);
  const imgSrc = hasError ? "/Pokemon_Sillehoute.webp" : pokemon.image;

  return (
    <div
      onClick={onClick}
      className="relative bg-gradient-to-br from-white to-gray-100 rounded-2xl p-4 shadow-md hover:shadow-xl  cursor-pointer transition-all duration-200"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavourites(pokemon.id);
        }}
        className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur p-1.5 rounded-full shadow hover:scale-110 transition"
      >
        {isFav ? (
          <MdOutlineFavorite className="text-red-500 w-5 h-5" />
        ) : (
          <MdFavoriteBorder className="text-gray-500 w-5 h-5" />
        )}
      </button>

      <div className="flex justify-center items-center h-32">
        <motion.img
          src={imgSrc}
          alt={pokemon.name}
          loading="lazy"
          onError={() => setHasError(true)}
          className="h-28 object-contain drop-shadow-md"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
      </div>
      <div className="mt-3 text-center">
        <p className="capitalize font-bold text-gray-800 tracking-wide">
          {pokemon.name}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
