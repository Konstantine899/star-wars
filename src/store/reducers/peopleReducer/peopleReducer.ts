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
      return { loading: true, error: null, results: [] };
    case PeopleActionTypes.FETCH_PEOPLE_SUCCESS:
      return {
        loading: false,
        error: null,
        results: action.payload,
      };
    case PeopleActionTypes.FETCH_PEOPLE_ERROR:
      return { loading: false, error: action.payload, results: [] };
    default:
      return state;
  }
};
