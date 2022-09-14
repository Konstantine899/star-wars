export interface IStarship {
  id: string;
  name: string;
  model: string;
  cost_in_credits: string;
  starship_class: string;
}

export interface IStarshipState {
  results: IStarship[];
  loading: boolean;
  error: null | string;
  pages: number[];
  starshipsCount: number;
}

export const starshipState: IStarshipState = {
  results: [],
  loading: false,
  error: null,
  pages: [],
  starshipsCount: 0,
};
