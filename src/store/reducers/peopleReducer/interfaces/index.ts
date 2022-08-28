import { PeopleActionTyps } from "../enum/PeopleActionTyps";
import { IPeopleState } from "../../../initialState/interface/IInitialState";

export interface FetchPeopleAction {
  type: PeopleActionTyps.FETCH_PEOPLE;
  // payload: IPeopleState[];
}
export interface FetchPeopleSuccessAction {
  type: PeopleActionTyps.FETCH_PEOPLE_SUCCESS;
  payload: IPeopleState[];
}
export interface FetchPeopleErrorAction {
  type: PeopleActionTyps.FETCH_PEOPLE_ERROR;
  payload: string;
}
