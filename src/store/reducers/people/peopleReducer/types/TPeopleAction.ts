import {
  IFetchPeopleAction,
  IFetchPeopleErrorAction,
  ISetPeoplePage,
  SearchPeople,
} from "../interfaces/IActions";
import { IFetchPeopleSuccessActions } from "../interfaces/IActions";

export type TPeopleAction =
  | IFetchPeopleAction
  | IFetchPeopleSuccessActions
  | IFetchPeopleErrorAction
  | ISetPeoplePage
  | SearchPeople;
