import { Dispatch } from "redux";

import { TPlanetAction } from "../../reducers/planetsReducer/types/TPlanetAction";
import { PlanetActionTypes } from "../../reducers/planetsReducer/enum/PlanetActionTypes";
import {
  IPlanet,
  IPlanetState,
} from "../../reducers/planetsReducer/initialState/interface/IPlanetState";
import { SwapiUrl } from "../enum/SwapiUrl";
import { gettingData } from "../services/gettingData";
import { extractId } from "../services/extractId";
import { TPlanetHistoryAction } from "../../reducers/PlanetHistoryReducer/type/TPlanetHistoryAction";
import { PlanetHistoryActionType } from "../../reducers/PlanetHistoryReducer/enum/PlanetHistoryActionType";

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
            `${SwapiUrl.PLANETS_URL}${SwapiUrl.QUERY_URL}${page}`
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

export const planetHistoryPush = (planet: IPlanet) => {
  return (dispatch: Dispatch<TPlanetHistoryAction>) => {
    dispatch({
      type: PlanetHistoryActionType.PLANET_HISTORY_PUSH,
      payload: planet,
    });
  };
};
