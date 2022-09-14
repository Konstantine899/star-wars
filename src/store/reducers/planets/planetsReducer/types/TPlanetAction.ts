import {
  IFetchPlanetAction,
  IFetchPlanetErrorAction,
  IFetchPlanetSuccessAction,
  ISearchPlanet,
  ISetPlanetPage,
} from "../interfaces/IAction";

export type TPlanetAction =
  | IFetchPlanetAction
  | IFetchPlanetSuccessAction
  | IFetchPlanetErrorAction
  | ISetPlanetPage
  | ISearchPlanet;
