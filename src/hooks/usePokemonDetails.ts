import { useQuery } from "@tanstack/react-query";
import { getPokemonDetails } from "../api/pokemonApi";
import type { PokemonDetailsResponseAPI } from "../types/pokemon";

export const usePokemonDetails = (name: string) =>
  useQuery<PokemonDetailsResponseAPI>({
    queryKey: ["details", name],
    queryFn: () => getPokemonDetails(name),
    enabled: !!name,
  });
