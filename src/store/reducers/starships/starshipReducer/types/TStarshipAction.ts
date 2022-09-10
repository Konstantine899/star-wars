import {
  IFetchStarshipAction,
  IFetchStarshipErrorAction,
  IFetchStarshipSuccessAction,
  ISetStarshipPage,
} from "../interfaces/IActions";

export type TStarshipAction =
  | IFetchStarshipAction
  | IFetchStarshipSuccessAction
  | IFetchStarshipErrorAction
  | ISetStarshipPage;
