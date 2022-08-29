import { PeopleActionTyps } from "../reducers/peopleReducer/enum/PeopleActionTyps";
import { Dispatch } from "redux";
import { TPeopleAction } from "../reducers/peopleReducer/types/TPeopleAction";

export const fetchPeople = () => {
  return async (dispatch: Dispatch<TPeopleAction>) => {
    try {
      dispatch({ type: PeopleActionTyps.FETCH_PEOPLE });
      const response = await fetch(`https://swapi.dev/api/people/`);
      const body = await response.json();
      dispatch({
        type: PeopleActionTyps.FETCH_PEOPLE_SUCCESS,
        payload: body.results,
      });
    } catch (error) {
      dispatch({
        type: PeopleActionTyps.FETCH_PEOPLE_ERROR,
        payload: "Error loading",
      });
    }
  };
};
