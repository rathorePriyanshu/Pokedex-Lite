import axios from "axios";
import type {
  PokemonDetailsResponseAPI,
  PokemonListResponseAPI,
  PokemonTypeResponseAPI,
} from "../types/pokemon";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const getPokemonList: (
  offset?: number,
  limit?: number,
) => Promise<PokemonListResponseAPI> = async (offset = 0, limit = 20) => {
  const { data } = await api.get(`/pokemon?offset=${offset}&limit=${limit}`);
  return data;
};

export const getPokemonDetails: (
  name: string,
) => Promise<PokemonDetailsResponseAPI> = async (name: string) => {
  const { data } = await api.get(`/pokemon/${name}`);
  return data;
};

export const getPokemonType: (
  type: string,
) => Promise<PokemonTypeResponseAPI> = async (type: string) => {
  const { data } = await api.get(`/type/${type}`);
  return data;
};
