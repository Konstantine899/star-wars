import { createContext } from "react";

import { IPeople } from "../store/reducers/people/peopleReducer/initialState/interface/IPeople";
import { IStarship } from "../store/reducers/starships/starshipReducer/initialState/interface/IStarshipState";
import { IPlanet } from "../store/reducers/planets/planetsReducer/initialState/interface/IPlanetState";

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
  loadingPeople: boolean;
  loadingStarships: boolean;
  loadingPlanets: boolean;
  peopleHistory: IPeople[];
  planetHistory: IPlanet[];
  starshipHistory: IStarship[];
  peoplePages: number[];
  planetPages: number[];
  starshipsPages: number[];
  getPlanetPage: (page: number) => void;
  getPeoplePage: (page: number) => void;
  getStarshipsPage: (page: number) => void;
  peopleImage: string;
  getPeopleImage: (id: string) => void;
  planetImage: string;
  getPlanetImage: (id: string) => void;
  starshipImage: string;
  getStarshipImage: (id: string) => void;
  searchPeople: (query: string) => void;
  searchPlanet: (query: string) => void;
}

export const StarWarsContext = createContext<IStarWarsCreateContext>(
  {} as IStarWarsCreateContext
);
