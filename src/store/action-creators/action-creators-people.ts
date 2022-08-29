import { PeopleActionTyps } from "../reducers/peopleReducer/enum/PeopleActionTyps";
import { Dispatch } from "redux";
import { TPeopleAction } from "../reducers/peopleReducer/types/TPeopleAction";
import {
  IInitialState,
  IPeopleState,
} from "../initialState/interface/IInitialState";

function extractId(body: any) {
  //Регулярка для поиска id в строке url
  const idReg = /\/([0-9]*)\/$/;
  return body.url.match(idReg)[1]; // return "number"
}

function transformPeople(body: IInitialState) {
  return body.results.map((people: IPeopleState) => ({
    id: extractId(people),
    name: people.name,
    gender: people.gender,
    birth_year: people.birth_year,
  }));
}

export const fetchPeople = () => {
  return async (dispatch: Dispatch<TPeopleAction>) => {
    try {
      dispatch({ type: PeopleActionTyps.FETCH_PEOPLE });
      const response = await fetch(`https://swapi.dev/api/people/`);
      const body = await response.json();
      dispatch({
        type: PeopleActionTyps.FETCH_PEOPLE_SUCCESS,
        payload: transformPeople(body),
      });
    } catch (error) {
      dispatch({
        type: PeopleActionTyps.FETCH_PEOPLE_ERROR,
        payload: "Error loading",
      });
    }
  };
};
