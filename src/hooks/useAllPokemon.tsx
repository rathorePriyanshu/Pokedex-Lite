import { useQuery } from "@tanstack/react-query";

export const useAllPokemon = (enabled: boolean) => {
  return useQuery({
    queryKey: ["all-pokemon"],
    queryFn: async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000");
      if (!res.ok) throw new Error("Failed to fetch all pokemon");
      return res.json();
    },
    enabled,
    staleTime: Infinity,
  });
};
