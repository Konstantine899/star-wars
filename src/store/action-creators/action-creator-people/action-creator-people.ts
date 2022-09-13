import {
  IPeople,
  IPeopleState,
} from "../../reducers/people/peopleReducer/initialState/interface/IPeople";
import { extractId } from "../services/extractId";
import { Dispatch } from "redux";
import { TPeopleAction } from "../../reducers/people/peopleReducer/types/TPeopleAction";
import { PeopleActionTypes } from "../../reducers/people/peopleReducer/enum/PeopleActionTypes";
import { gettingData } from "../services/gettingData";
import { SwapiUrl } from "../enum/SwapiUrl";
import { TPeopleHistoryAction } from "../../reducers/people/peopleHistoryReducer/type/TPeopleHistoryAction";
import { PeopleHistoryActionType } from "../../reducers/people/peopleHistoryReducer/enum/PeopleHistoryActionType";
import { TPeopleImageAction } from "../../reducers/people/peopleImageReducer/type/TPeopleImageAction";
import { PeopleImageTypes } from "../../reducers/people/peopleImageReducer/enum/PeopleImageTypes";
import NoPictute from "../image/no_picture.jpg";
import { ImagesUrl } from "../enum/ImagesUrl";
import { fetchImage } from "../services/fetchImage";
import { fetchImageStatus } from "../services/fetchImageStatus";

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
        pages,
        peopleCount,
      });
    } catch (error) {
      dispatch({
        type: PeopleActionTypes.FETCH_PEOPLE_ERROR,
        payload: "Error loading People",

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
            `${SwapiUrl.PEOPLE_URL}${SwapiUrl.QUERY_PAGE_URL}${page}`
          )
        ),

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

export const getPeopleImage = (id: string) => {
  return async (dispatch: Dispatch<TPeopleImageAction>) => {
    try {
      const image = await fetchImage(
        `${ImagesUrl.BASE_IMAGE_URL}${ImagesUrl.CHARASTERS_IMAGE_URL}${id}${ImagesUrl.JPG}`
      );

      const status = await fetchImageStatus(
        `${ImagesUrl.BASE_IMAGE_URL}${ImagesUrl.CHARASTERS_IMAGE_URL}${id}${ImagesUrl.JPG}`
      );

      dispatch({ type: PeopleImageTypes.FETCH_PEOPLE_IMAGE });
      dispatch({
        type: PeopleImageTypes.FETCH_PEOPLE_IMAGE_SUCCESS,
        image: `${status === 404 ? NoPictute : image}`,
      });
    } catch (error) {
      dispatch({
        type: PeopleImageTypes.FETCH_PEOPLE_IMAGE_ERROR,
        error: "NO PICTURE",
      });
    }
  };
};

export const searchPeople = (query: string) => {
  return async (dispatch: Dispatch<TPeopleAction>) => {
    const response = await fetch(
      `${SwapiUrl.BASE_URL}${SwapiUrl.PEOPLE_URL}${SwapiUrl.QUERY_SEARCH_URL}${query}`
    );
    const data = transformPeople(await response.json());
    dispatch({ type: PeopleActionTypes.SEARCH_PEOPLE, results: data });
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
