import {
  IPeople,
  IPeopleState,
} from "../../reducers/peopleReducer/initialState/interface/IPeople";
import { extractId } from "../services/extractId";
import { Dispatch } from "redux";
import { TPeopleAction } from "../../reducers/peopleReducer/types/TPeopleAction";
import { PeopleActionTypes } from "../../reducers/peopleReducer/enum/PeopleActionTypes";
import { gettingData } from "../services/gettingData";
import { SwapiUrl } from "../enum/SwapiUrl";
import { TPeopleHistoryAction } from "../../reducers/peopleHistoryReducer/type/TPeopleHistoryAction";
import { PeopleHistoryActionType } from "../../reducers/peopleHistoryReducer/enum/PeopleHistoryActionType";

function transformPeople(body: IPeopleState) {
  return body.results.map((people: IPeople) => ({
    id: extractId(people),
    name: people.name,
    gender: people.gender,
    birth_year: people.birth_year,
  }));
}

export const getAllPeople = () => {
  return async (dispatch: Dispatch<TPeopleAction>) => {
    try {
      dispatch({ type: PeopleActionTypes.FETCH_PEOPLE });
      dispatch({
        type: PeopleActionTypes.FETCH_PEOPLE_SUCCESS,
        payload: transformPeople(await gettingData(`${SwapiUrl.PEOPLE_URL}`)),
      });
    } catch (error) {
      dispatch({
        type: PeopleActionTypes.FETCH_PEOPLE_ERROR,
        payload: "Error loading People",
      });
    }
  };
};

export const peopleHistoryPush = (people: IPeople) => {
  return (dispatch: Dispatch<TPeopleHistoryAction>) => {
    dispatch({
      type: PeopleHistoryActionType.PEOPLE_HISTORY_PUSH,
      payload: people,
    });
  };
};
