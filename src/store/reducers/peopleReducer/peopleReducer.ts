import { initialState } from "../../initialState/initialState";
import { IInitialState } from "../../initialState/interface/IInitialState";
import { TPeopleAction } from "./types/TPeopleAction";
import { PeopleActionTyps } from "./enum/PeopleActionTyps";

export const peopleReducer = (
  state = initialState,
  action: TPeopleAction
): IInitialState => {
  switch (action.type) {
    case PeopleActionTyps.FETCH_PEOPLE:
      return { loading: true, error: null, results: [] };
    case PeopleActionTyps.FETCH_PEOPLE_SUCCESS:
      return {
        loading: false,
        error: null,
        results: action.payload,
      };
    case PeopleActionTyps.FETCH_PEOPLE_ERROR:
      return { loading: false, error: action.payload, results: [] };
    default:
      return state;
  }
};
