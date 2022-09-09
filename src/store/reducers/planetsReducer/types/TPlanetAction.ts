import {
  IFetchPlanetAction,
  IFetchPlanetErrorAction,
  IFetchPlanetSuccessAction,
  ISetPlanetPage,
} from "../interfaces/IAction";

export type TPlanetAction =
  | IFetchPlanetAction
  | IFetchPlanetSuccessAction
  | IFetchPlanetErrorAction
  | ISetPlanetPage;
