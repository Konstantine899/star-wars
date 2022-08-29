import { planetState } from "./initialState/planetState";
import { TPlanetAction } from "./types/TPlanetAction";
import { PlanetActionTypes } from "./enum/PlanetActionTypes";
import { IPlanetState } from "./initialState/interface/IPlanetState";

export const planetsReducer = (
  state = planetState,
  action: TPlanetAction
): IPlanetState => {
  switch (action.type) {
    case PlanetActionTypes.FETCH_PLANET:
      return { loading: true, error: null, results: [] };
    case PlanetActionTypes.FETCH_PLANET_SUCCESS:
      return { loading: false, error: null, results: action.payload };
    case PlanetActionTypes.FETCH_PLANET_ERROR:
      return { loading: false, error: action.payload, results: [] };
    default:
      return state;
  }
};
