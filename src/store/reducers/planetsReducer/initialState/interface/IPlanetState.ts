export interface IPlanet {
  id: string;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  population: string;
}

export interface IPlanetState {
  results: IPlanet[];
  loading: boolean;
  error: null | string;
  pages: number[];
  planetsCount: number;
}
