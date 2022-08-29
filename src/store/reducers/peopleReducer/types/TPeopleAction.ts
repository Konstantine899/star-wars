import {
  IFetchPeopleAction,
  IFetchPeopleErrorAction,
} from "../interfaces/IActions";
import { IFetchPeopleSuccessActions } from "../interfaces/IActions";

export type TPeopleAction =
  | IFetchPeopleAction
  | IFetchPeopleSuccessActions
  | IFetchPeopleErrorAction;
