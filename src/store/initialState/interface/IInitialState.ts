export interface IPlanet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  population: string;
}

export interface IStarship {
  name: string;
  model: string;
  cost_in_credits: string;
  starship_class: string;
}

export interface IPeopleState {
  name: string;
  gender: string;
  birth_year: string;
}

export interface IInitialState {
  results: IPeopleState[] | IStarship[] | IPlanet[];
  loading: boolean;
  error: null | string;
}
