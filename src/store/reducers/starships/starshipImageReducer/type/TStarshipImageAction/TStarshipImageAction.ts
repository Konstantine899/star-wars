import {
  IFetchStarshipImageAction,
  IFetchStarshipImageErrorAction,
  IFetchStarshipImageSuccessAction,
} from "../../interfaces/IActions";

export type TStarshipImageAction =
  | IFetchStarshipImageAction
  | IFetchStarshipImageErrorAction
  | IFetchStarshipImageSuccessAction;
