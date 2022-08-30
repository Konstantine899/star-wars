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

export const getAllPlanet = () => {
  return async (dispatch: Dispatch<TPlanetAction>) => {
    try {
      dispatch({ type: PlanetActionTypes.FETCH_PLANET });
      dispatch({
        type: PlanetActionTypes.FETCH_PLANET_SUCCESS,
        payload: transformPlanet(await gettingData(`${SwapiUrl.PLANETS_URL}`)),
      });
    } catch (error) {
      dispatch({
        type: PlanetActionTypes.FETCH_PLANET_ERROR,
        payload: "Error loading Planets",
      });
    }
  };
};
