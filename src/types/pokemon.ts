export interface PokemonListItempAPI {
  name: string;
  url: string;
}

export interface PokemonListResponseAPI {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItempAPI[];
}

export interface PokemonDetailsResponseAPI {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
}

export interface PokemonTypeItemAPI {
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
}

export interface PokemonTypeResponseAPI {
  pokemon: PokemonTypeItemAPI[];
}

export interface PokemonCardType {
  id: number;
  name: string;
  image: string;
}

export interface PokemonDetailsType {
  id: number;
  name: string;
  image: string;
  types: string[];
  stats: {
    name: string;
    value: number;
  }[];
  abilities: string[];
}
