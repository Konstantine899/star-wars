import {
  IFetchStarshipAction,
  IFetchStarshipErrorAction,
  IFetchStarshipSuccessAction,
} from "../interfaces/IActions";

export type TStarshipAction =
  | IFetchStarshipAction
  | IFetchStarshipSuccessAction
  | IFetchStarshipErrorAction;
