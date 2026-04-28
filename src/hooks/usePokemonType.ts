import { useQuery } from "@tanstack/react-query";
import { getPokemonType } from "../api/pokemonApi";
import type { PokemonTypeResponseAPI } from "../types/pokemon";

export const usePokemonType = (type: string) =>
  useQuery<PokemonTypeResponseAPI>({
    queryKey: ["type", type],
    queryFn: () => getPokemonType(type),
    enabled: !!type,
  });
