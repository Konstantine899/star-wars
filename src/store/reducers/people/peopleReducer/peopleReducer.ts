import { peopleState } from "./initialState/peopleState";
import { IPeopleState } from "./initialState/interface/IPeople";
import { TPeopleAction } from "./types/TPeopleAction";
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
    case PeopleActionTypes.SET_PEOPLE_PAGE:
      return { ...state, loading: true, results: [] };

    default:
      return state;
  }
};
