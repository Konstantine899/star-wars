import {
  IFetchStarshipAction,
  IFetchStarshipErrorAction,
  IFetchStarshipSuccessAction,
  ISearchStarship,
  ISetStarshipPage,
} from "../interfaces/IActions";

export type TStarshipAction =
  | IFetchStarshipAction
  | IFetchStarshipSuccessAction
  | IFetchStarshipErrorAction
  | ISetStarshipPage
  | ISearchStarship;
