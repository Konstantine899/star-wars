import { createContext } from "react";

import { IPeople } from "../store/reducers/peopleReducer/initialState/interface/IPeople";
import { IStarship } from "../store/reducers/starshipReducer/initialState/interface/IStarshipState";
import { IPlanet } from "../store/reducers/planetsReducer/initialState/interface/IPlanetState";

interface IContext {
  allPeople: IPeople[];
  allStarships: IStarship[];
  allPlanets: IPlanet[];
  getPeople: (id: string) => void;
  people: IPeople | null;
}

export const StarWarsContext = createContext<IContext>({} as IContext);
