import { PlanetActionTypes } from "../enum/PlanetActionTypes";
import { IPlanet } from "../initialState/planetState";

interface IFetchPlanetAction {
  type: PlanetActionTypes.FETCH_PLANET;
}

interface IFetchPlanetSuccessAction {
  type: PlanetActionTypes.FETCH_PLANET_SUCCESS;
  planetsCount: number;
  pages: number[];
  payload: IPlanet[];
}

interface IFetchPlanetErrorAction {
  type: PlanetActionTypes.FETCH_PLANET_ERROR;
  payload: string;
}

interface ISetPlanetPage {
  type: PlanetActionTypes.SET_PLANET_PAGE;
}

interface ISearchPlanet {
  type: PlanetActionTypes.SEARCH_PLANET;
  results: IPlanet[];
}

export type TPlanetAction =
  | IFetchPlanetAction
  | IFetchPlanetSuccessAction
  | IFetchPlanetErrorAction
  | ISetPlanetPage
  | ISearchPlanet;
