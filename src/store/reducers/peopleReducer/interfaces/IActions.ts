import { PeopleActionTypes } from "../enum/PeopleActionTypes";
import { IResultsState } from "../initialState/interface/IResultsState";

export interface IFetchPeopleAction {
  type: PeopleActionTypes.FETCH_PEOPLE;
}
export interface IFetchPeopleSuccessActions {
  type: PeopleActionTypes.FETCH_PEOPLE_SUCCESS;
  payload: IResultsState[];
}
export interface IFetchPeopleErrorAction {
  type: PeopleActionTypes.FETCH_PEOPLE_ERROR;
  payload: string;
}
