import { Dispatch } from "redux";

import { TPlanetAction } from "../../reducers/planets/planetsReducer/types/TPlanetAction";
import { PlanetActionTypes } from "../../reducers/planets/planetsReducer/enum/PlanetActionTypes";
import {
  IPlanet,
  IPlanetState,
} from "../../reducers/planets/planetsReducer/initialState/interface/IPlanetState";
import { SwapiUrl } from "../enum/SwapiUrl";
import { gettingData } from "../services/gettingData";
import { extractId } from "../services/extractId";
import { TPlanetHistoryAction } from "../../reducers/planets/PlanetHistoryReducer/type/TPlanetHistoryAction";
import { PlanetHistoryActionType } from "../../reducers/planets/PlanetHistoryReducer/enum/PlanetHistoryActionType";
import NoPictute from "../image/no_picture.jpg";
import { TPlanetImageAction } from "../../reducers/planets/planetImageReducer/type/TPlanetImageAction";
import { PlanetImageTypes } from "../../reducers/planets/planetImageReducer/enum/PlanetImageTypes";
import { ImagesUrl } from "../enum/ImagesUrl";
import { fetchImage } from "../services/fetchImage";
import { fetchImageStatus } from "../services/fetchImageStatus";

function transformPlanet(body: IPlanetState) {
  return body.results.map((planet: IPlanet) => ({
    id: extractId(planet),
    name: planet.name,
    rotation_period: planet.rotation_period,
    orbital_period: planet.orbital_period,
    diameter: planet.diameter,
    climate: planet.climate,
    gravity: planet.gravity,
    terrain: planet.terrain,
    population: planet.population,
  }));
}

const planetCountTransform = (body: any) => {
  return body.count;
};

export const getAllPlanets = () => {
  return async (dispatch: Dispatch<TPlanetAction>) => {
    try {
      const planetsCount = planetCountTransform(
        await gettingData(`${SwapiUrl.PLANETS_URL}`)
      );
      // подсчет количества страниц
      const pageCount = Math.ceil(planetsCount / 10);
      let pages: number[] = [];
      for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
      }
      dispatch({ type: PlanetActionTypes.FETCH_PLANET });
      dispatch({
        type: PlanetActionTypes.FETCH_PLANET_SUCCESS,
        payload: transformPlanet(await gettingData(`${SwapiUrl.PLANETS_URL}`)),
        planetsCount,
        pages,
      });
    } catch (error) {
      dispatch({
        type: PlanetActionTypes.FETCH_PLANET_ERROR,
        payload: "Error loading Planets",
      });
    }
  };
};

export const getPlanetPage = (page: number) => {
  return async (dispatch: Dispatch<TPlanetAction>) => {
    try {
      const planetsCount = planetCountTransform(
        await gettingData(`${SwapiUrl.PLANETS_URL}`)
      );
      // подсчет количества страниц
      const pageCount = Math.ceil(planetsCount / 10);
      let pages: number[] = [];
      for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
      }
      dispatch({
        type: PlanetActionTypes.SET_PLANET_PAGE,
      });
      dispatch({
        type: PlanetActionTypes.FETCH_PLANET_SUCCESS,
        payload: transformPlanet(
          await gettingData(
            `${SwapiUrl.PLANETS_URL}${SwapiUrl.QUERY_PAGE_URL}${page}`
          )
        ),
        planetsCount,
        pages,
      });
    } catch (error) {
      dispatch({
        type: PlanetActionTypes.FETCH_PLANET_ERROR,
        payload: "Error loading Planets",
      });
    }
  };
};

export const getPlanetImage = (id: string) => {
  return async (dispatch: Dispatch<TPlanetImageAction>) => {
    try {
      const image = await fetchImage(
        `${ImagesUrl.BASE_IMAGE_URL}${ImagesUrl.PLANETS_IMAGE_URL}${id}${ImagesUrl.JPG}`
      );

      const status = await fetchImageStatus(
        `${ImagesUrl.BASE_IMAGE_URL}${ImagesUrl.PLANETS_IMAGE_URL}${id}${ImagesUrl.JPG}`
      );

      dispatch({ type: PlanetImageTypes.FETCH_PLANET_IMAGE });
      dispatch({
        type: PlanetImageTypes.FETCH_PLANET_IMAGE_SUCCESS,
        image: `${status === 200 ? image : NoPictute}`,
      });
    } catch (error) {
      dispatch({
        type: PlanetImageTypes.FETCH_PLANET_IMAGE_ERROR,
        error: "NO PICTURE",
      });
    }
  };
};

export const planetHistoryPush = (planet: IPlanet) => {
  return (dispatch: Dispatch<TPlanetHistoryAction>) => {
    dispatch({
      type: PlanetHistoryActionType.PLANET_HISTORY_PUSH,
      payload: planet,
    });
  };
};
