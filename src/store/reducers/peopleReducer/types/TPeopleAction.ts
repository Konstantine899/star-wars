import {
  FetchPeopleAction,
  FetchPeopleErrorAction,
  FetchPeopleSuccessAction,
} from "../interfaces";

export type TPeopleAction =
  | FetchPeopleAction
  | FetchPeopleSuccessAction
  | FetchPeopleErrorAction;
