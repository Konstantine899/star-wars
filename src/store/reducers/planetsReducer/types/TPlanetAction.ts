import {
  IFetchPlanetAction,
  IFetchPlanetErrorAction,
  IFetchPlanetSuccessAction,
} from "../interfaces/IAction";

export type TPlanetAction =
  | IFetchPlanetAction
  | IFetchPlanetSuccessAction
  | IFetchPlanetErrorAction;
