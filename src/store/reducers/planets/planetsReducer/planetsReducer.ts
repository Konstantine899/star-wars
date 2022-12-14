import { planetState } from "./initialState/planetState";
import { TPlanetAction } from "./interfaces/IAction";
import { PlanetActionTypes } from "./enum/PlanetActionTypes";
import { IPlanetState } from "./initialState/planetState";

export const planetsReducer = (
  state = planetState,
  action: TPlanetAction
): IPlanetState => {
  switch (action.type) {
    case PlanetActionTypes.FETCH_PLANET:
      return { ...state, loading: true, error: null, results: [] };
    case PlanetActionTypes.FETCH_PLANET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        planetsCount: action.planetsCount,
        pages: action.pages,
        results: action.payload,
      };
    case PlanetActionTypes.FETCH_PLANET_ERROR:
      return { ...state, loading: false, error: action.payload, results: [] };
    case PlanetActionTypes.SEARCH_PLANET:
      return { ...state, results: action.results };
    case PlanetActionTypes.SET_PLANET_PAGE:
      return { ...state, loading: true, results: [] };
    default:
      return state;
  }
};
