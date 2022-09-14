import { IPlanet } from "../../planetsReducer/initialState/planetState";

export interface IPlanetHistoryState {
  history: IPlanet[];
}

export const PlanetHistoryState: IPlanetHistoryState = {
  history: [],
};
