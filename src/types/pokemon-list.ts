export interface PokemonResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokeData[];
}

export interface PokeData {
  name: string;
  url: string;
  id: number;
  img: string;
}
