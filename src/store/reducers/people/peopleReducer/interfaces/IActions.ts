import { PeopleActionTypes } from "../enum/PeopleActionTypes";
import { IPeople } from "../initialState/peopleState";

interface IFetchPeopleAction {
  type: PeopleActionTypes.FETCH_PEOPLE;
}
interface IFetchPeopleSuccessActions {
  type: PeopleActionTypes.FETCH_PEOPLE_SUCCESS;
  pages: number[];
  peopleCount: number;
  payload: IPeople[];
}
interface IFetchPeopleErrorAction {
  type: PeopleActionTypes.FETCH_PEOPLE_ERROR;
  pages: number[];
  peopleCount: number;
  payload: string;
}

interface ISetPeoplePage {
  type: PeopleActionTypes.SET_PEOPLE_PAGE;
}

interface ISearchPeople {
  type: PeopleActionTypes.SEARCH_PEOPLE;
  results: IPeople[];
}
export type TPeopleAction =
  | IFetchPeopleAction
  | IFetchPeopleSuccessActions
  | IFetchPeopleErrorAction
  | ISetPeoplePage
  | ISearchPeople;
