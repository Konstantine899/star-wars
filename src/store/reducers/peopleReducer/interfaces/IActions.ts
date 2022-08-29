import { PeopleActionTypes } from "../enum/PeopleActionTypes";
import { IPeople } from "../initialState/interface/IPeople";

export interface IFetchPeopleAction {
  type: PeopleActionTypes.FETCH_PEOPLE;
}
export interface IFetchPeopleSuccessActions {
  type: PeopleActionTypes.FETCH_PEOPLE_SUCCESS;
  payload: IPeople[];
}
export interface IFetchPeopleErrorAction {
  type: PeopleActionTypes.FETCH_PEOPLE_ERROR;
  payload: string;
}
