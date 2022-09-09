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

const peopleCountTransform = (body: any) => {
  return body.count;
};

export const getAllPeople = () => {
  return async (dispatch: Dispatch<TPeopleAction>) => {
    try {
      const peopleCount = peopleCountTransform(
        await gettingData(`${SwapiUrl.PEOPLE_URL}`)
      );
      // подсчет количества страниц
      const pageCount = Math.ceil(peopleCount / 10);
      let pages: number[] = [];
      for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
      }

      dispatch({ type: PeopleActionTypes.FETCH_PEOPLE });
      dispatch({
        type: PeopleActionTypes.FETCH_PEOPLE_SUCCESS,
        payload: transformPeople(await gettingData(`${SwapiUrl.PEOPLE_URL}`)),
        currentPage: 1,
        pages,
        peopleCount,
      });
    } catch (error) {
      dispatch({
        type: PeopleActionTypes.FETCH_PEOPLE_ERROR,
        payload: "Error loading People",
        currentPage: 1,
        pages: [],
        peopleCount: 0,
      });
    }
  };
};

export const getPeoplePage = (page: number) => {
  return async (dispatch: Dispatch<TPeopleAction>) => {
    const peopleCount = peopleCountTransform(
      await gettingData(`${SwapiUrl.PEOPLE_URL}`)
    );
    // подсчет количества страниц
    const pageCount = Math.ceil(peopleCount / 10);
    let pages: number[] = [];
    for (let i = 0; i < pageCount; i++) {
      pages.push(i + 1);
    }

    try {
      dispatch({ type: PeopleActionTypes.SET_PEOPLE_PAGE });
      dispatch({
        type: PeopleActionTypes.FETCH_PEOPLE_SUCCESS,
        payload: transformPeople(
          await gettingData(
            `${SwapiUrl.PEOPLE_URL}${SwapiUrl.QUERY_URL}${page}`
          )
        ),
        currentPage: page,
        pages,
        peopleCount,
      });
    } catch (e) {
      dispatch({
        type: PeopleActionTypes.FETCH_PEOPLE_ERROR,
        payload: "Error loading People",
        currentPage: 1,
        pages: [],
        peopleCount: 0,
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
