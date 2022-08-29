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

export interface IResultsState {
  id: string;
  name: string;
  gender: string;
  birth_year: string;
}

export interface IPeopleState {
  results: IResultsState[];
  loading: boolean;
  error: null | string;
}
