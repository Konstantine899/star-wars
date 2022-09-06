import { IPlanet } from "../../planetsReducer/initialState/interface/IPlanetState";

export interface IPlanetHistoryState {
  history: IPlanet[];
}

export const PlanetHistoryState: IPlanetHistoryState = {
  history: [],
};
