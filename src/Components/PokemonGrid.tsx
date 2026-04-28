import { mapListItem } from "../mappers/pokemonMappers";
import type { PokemonListItempAPI } from "../types/pokemon";
import PokemonCard from "./PokemonCard";

interface Props {
  data: PokemonListItempAPI[];
  onSelect: (name: string) => void;
}

const PokemonGrid = ({ data, onSelect }: Props) => {
  return (
    <div className="w-full mx-auto px-2 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
        {data.map((p) => {
          const pokemon = mapListItem(p);

          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onClick={() => onSelect(pokemon.name)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PokemonGrid;
