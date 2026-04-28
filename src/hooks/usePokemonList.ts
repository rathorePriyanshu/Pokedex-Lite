import { useInfiniteQuery } from "@tanstack/react-query";
import type { PokemonListResponseAPI } from "../types/pokemon";
import { getPokemonList } from "../api/pokemonApi";

export const usePokemonList = () =>
  useInfiniteQuery<PokemonListResponseAPI>({
    queryKey: ["pokemon"],
    queryFn: ({ pageParam }) => getPokemonList(pageParam as number),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) =>
      lastPage.next ? pages.length * 20 : undefined,
  });
