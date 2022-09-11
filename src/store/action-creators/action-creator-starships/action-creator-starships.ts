import {
  IStarship,
  IStarshipState,
} from "../../reducers/starships/starshipReducer/initialState/interface/IStarshipState";
import { extractId } from "../services/extractId";
import { Dispatch } from "redux";
import { TStarshipAction } from "../../reducers/starships/starshipReducer/types/TStarshipAction";
import { StarshipsActionTypes } from "../../reducers/starships/starshipReducer/enum/StarshipsActionTypes";
import { gettingData } from "../services/gettingData";
import { SwapiUrl } from "../enum/SwapiUrl";
import { TStarshipHistoryAction } from "../../reducers/starships/starshipHistoryReducer/type/TStarshipHistoryAction";
import { StarshipHistoryActionType } from "../../reducers/starships/starshipHistoryReducer/enum/StarshipHistoryActionType";
import { fetchImage } from "../services/fetchImage";
import { ImagesUrl } from "../enum/ImagesUrl";
import { fetchImageStatus } from "../services/fetchImageStatus";
import NoPictute from "../image/no_picture.jpg";
import { TStarshipImageAction } from "../../reducers/starships/starshipImageReducer/type/TStarshipImageAction/TStarshipImageAction";
import { StarshipImageTypes } from "../../reducers/starships/starshipImageReducer/enum/StarshipImageTypes";

function transformStarships(body: IStarshipState) {
  return body.results.map((starship: IStarship) => ({
    id: extractId(starship),
    name: starship.name,
    model: starship.model,
    cost_in_credits: starship.cost_in_credits,
    starship_class: starship.starship_class,
  }));
}

const starShipCountTransform = (body: any) => {
  return body.count;
};

export const getAllStarships = () => {
  return async (dispatch: Dispatch<TStarshipAction>) => {
    try {
      const starshipsCount = starShipCountTransform(
        await gettingData(`${SwapiUrl.STARSHIPS_URL}`)
      );
      // подсчет количества страниц
      const pageCount = Math.ceil(starshipsCount / 10);
      let pages: number[] = [];
      for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
      }
      dispatch({ type: StarshipsActionTypes.FETCH_STARSHIPS });
      dispatch({
        type: StarshipsActionTypes.FETCH_STARSHIPS_SUCCESS,
        payload: transformStarships(
          await gettingData(`${SwapiUrl.STARSHIPS_URL}`)
        ),
        pages,
        starshipsCount,
      });
    } catch (error) {
      dispatch({
        type: StarshipsActionTypes.FETCH_STARSHIPS_ERROR,
        payload: "Error loading Starships",
      });
    }
  };
};

export const getStarshipsPage = (page: number) => {
  return async (dispatch: Dispatch<TStarshipAction>) => {
    try {
      const starshipsCount = starShipCountTransform(
        await gettingData(`${SwapiUrl.STARSHIPS_URL}`)
      );
      // подсчет количества страниц
      const pageCount = Math.ceil(starshipsCount / 10);
      let pages: number[] = [];
      for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
      }
      dispatch({ type: StarshipsActionTypes.SET_STARSHIP_PAGE });
      dispatch({
        type: StarshipsActionTypes.FETCH_STARSHIPS_SUCCESS,
        payload: transformStarships(
          await gettingData(
            `${SwapiUrl.STARSHIPS_URL}${SwapiUrl.QUERY_URL}${page}`
          )
        ),
        pages,
        starshipsCount,
      });
    } catch (error) {
      dispatch({
        type: StarshipsActionTypes.FETCH_STARSHIPS_ERROR,
        payload: "Error loading Starships",
      });
    }
  };
};

export const getStarshipImage = (id: string) => {
  return async (dispatch: Dispatch<TStarshipImageAction>) => {
    try {
      const image = await fetchImage(
        `${ImagesUrl.BASE_IMAGE_URL}${ImagesUrl.STARSHIPS_IMAGE_URL}${id}${ImagesUrl.JPG}`
      );

      const status = await fetchImageStatus(
        `${ImagesUrl.BASE_IMAGE_URL}${ImagesUrl.STARSHIPS_IMAGE_URL}${id}${ImagesUrl.JPG}`
      );

      dispatch({ type: StarshipImageTypes.FETCH_STARSHIP_IMAGE });
      dispatch({
        type: StarshipImageTypes.FETCH_STARSHIP_IMAGE_SUCCESS,
        image: `${status === 200 ? image : NoPictute}`,
      });
    } catch (error) {
      dispatch({
        type: StarshipImageTypes.FETCH_STARSHIP_IMAGE_ERROR,
        error: "NO PICTURE",
      });
    }
  };
};

export const starshipHistoryPush = (starship: IStarship) => {
  return (dispatch: Dispatch<TStarshipHistoryAction>) => {
    dispatch({
      type: StarshipHistoryActionType.STARSHIP_HISTORY_PUSH,
      payload: starship,
    });
  };
};
