import { PeopleActionTypes } from "../enum/PeopleActionTypes";
import { IPeople } from "../initialState/interface/IPeople";

export interface IFetchPeopleAction {
  type: PeopleActionTypes.FETCH_PEOPLE;
}
export interface IFetchPeopleSuccessActions {
  type: PeopleActionTypes.FETCH_PEOPLE_SUCCESS;

  pages: number[];
  peopleCount: number;
  payload: IPeople[];
}
export interface IFetchPeopleErrorAction {
  type: PeopleActionTypes.FETCH_PEOPLE_ERROR;

  pages: number[];
  peopleCount: number;
  payload: string;
}

export interface ISetPeoplePage {
  type: PeopleActionTypes.SET_PEOPLE_PAGE;
}
