import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Store {
  search: string;
  setSearch: (val: string) => void;

  type: string;
  setType: (val: string) => void;

  favourites: number[];
  toggleFavourites: (id: number) => void;
}

export const usePokemonStore = create<Store>()(
  persist(
    (set, get) => ({
      search: "",
      setSearch: (val) => set({ search: val }),

      type: "",
      setType: (val) => set({ type: val }),

      favourites: [],
      toggleFavourites: (id) => {
        const favs = get().favourites;
        set({
          favourites: favs.includes(id)
            ? favs.filter((f) => f !== id)
            : [...favs, id],
        });
      },
    }),
    { name: "pokemon-storage" },
  ),
);
