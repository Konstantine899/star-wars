import { peopleState } from "./initialState/peopleState";
import { IPeopleState } from "./initialState/peopleState";
import { TPeopleAction } from "./interfaces/IActions";
import { PeopleActionTypes } from "./enum/PeopleActionTypes";

export const peopleReducer = (
  state = peopleState,
  action: TPeopleAction
): IPeopleState => {
  switch (action.type) {
    case PeopleActionTypes.FETCH_PEOPLE:
      return {
        ...state,
        loading: true,
        results: [],
      };
    case PeopleActionTypes.FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        peopleCount: action.peopleCount,
        pages: action.pages,
        results: action.payload,
      };
    case PeopleActionTypes.FETCH_PEOPLE_ERROR:
      return {
        ...state,
        error: action.payload,
        results: [],
      };

    case PeopleActionTypes.SEARCH_PEOPLE:
      return { ...state, results: action.results };

    case PeopleActionTypes.SET_PEOPLE_PAGE:
      return { ...state, loading: true, results: [] };
    default:
      return state;
  }
};
