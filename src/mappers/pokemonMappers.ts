import type {
  PokemonListItempAPI,
  PokemonCardType,
  PokemonDetailsResponseAPI,
  PokemonDetailsType,
} from "../types/pokemon";

const allowedStats = [
  "hp",
  "attack",
  "defense",
  "special-attack",
  "special-defense",
  "speed",
];

export const mapListItem = (p: PokemonListItempAPI): PokemonCardType => {
  const id = p.url.split("/").filter(Boolean).pop() || "0";

  return {
    id: Number(id),
    name: p.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
  };
};

export const mapDetails = (
  data: PokemonDetailsResponseAPI,
): PokemonDetailsType => ({
  id: data.id,
  name: data.name,
  image: data.sprites.front_default,
  types: data.types.map((t) => t.type.name),
  stats: data.stats
    .filter((s) => allowedStats.includes(s.stat.name))
    .map((s) => ({
      name: s.stat.name,
      value: s.base_stat,
    })),
  abilities: data.abilities.map((a) => a.ability.name),
});
