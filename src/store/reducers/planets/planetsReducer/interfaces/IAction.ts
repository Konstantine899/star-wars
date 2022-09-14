import { PlanetActionTypes } from "../enum/PlanetActionTypes";
import { IPlanet } from "../initialState/interface/IPlanetState";

export interface IFetchPlanetAction {
  type: PlanetActionTypes.FETCH_PLANET;
}

export interface IFetchPlanetSuccessAction {
  type: PlanetActionTypes.FETCH_PLANET_SUCCESS;
  planetsCount: number;
  pages: number[];
  payload: IPlanet[];
}

export interface IFetchPlanetErrorAction {
  type: PlanetActionTypes.FETCH_PLANET_ERROR;
  payload: string;
}

export interface ISetPlanetPage {
  type: PlanetActionTypes.SET_PLANET_PAGE;
}

export interface ISearchPlanet {
  type: PlanetActionTypes.SEARCH_PLANET;
  results: IPlanet[];
}
