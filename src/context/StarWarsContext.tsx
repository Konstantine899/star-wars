import { createContext } from "react";

import { IPeople } from "../store/reducers/peopleReducer/initialState/interface/IPeople";
import { IStarship } from "../store/reducers/starshipReducer/initialState/interface/IStarshipState";
import { IPlanet } from "../store/reducers/planetsReducer/initialState/interface/IPlanetState";

interface IStarWarsCreateContext {
  allPeople: IPeople[];
  allStarships: IStarship[];
  allPlanets: IPlanet[];
  getPeople: (id: string) => void;
  getPlanet: (id: string) => void;
  getStarship: (id: string) => void;
  people: IPeople | null;
  planet: IPlanet | null;
  starship: IStarship | null;
  getPersonImage: (id: string) => string;
  getPlanetImage: (id: string) => string;
  getStarshipImage: (id: string) => string;
  loadingPeople: boolean;
  loadingStarships: boolean;
  loadingPlanets: boolean;
  peopleHistory: IPeople[];
  planetHistory: IPlanet[];
  starshipHistory: IStarship[];
  getPeoplePage: (page: number) => void;
  peoplePages: number[];
}

export const StarWarsContext = createContext<IStarWarsCreateContext>(
  {} as IStarWarsCreateContext
);
