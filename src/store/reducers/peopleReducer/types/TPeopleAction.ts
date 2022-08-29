import {
  FetchPeopleAction,
  FetchPeopleErrorAction,
} from "../interfaces/fetchPeopleSuccessAction";
import { FetchPeopleSuccessAction } from "../interfaces/fetchPeopleSuccessAction";

export type TPeopleAction =
  | FetchPeopleAction
  | FetchPeopleSuccessAction
  | FetchPeopleErrorAction;
