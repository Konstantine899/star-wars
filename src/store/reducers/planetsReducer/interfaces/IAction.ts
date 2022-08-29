import { PlanetActionTypes } from "../enum/PlanetActionTypes";
import { IPlanet } from "../initialState/interface/IPlanetState";

export interface IFetchPlanetAction {
  type: PlanetActionTypes.FETCH_PLANET;
}

export interface IFetchPlanetSuccessAction {
  type: PlanetActionTypes.FETCH_PLANET_SUCCESS;
  payload: IPlanet[];
}

export interface IFetchPlanetErrorAction {
  type: PlanetActionTypes.FETCH_PLANET_ERROR;
  payload: string;
}
