import {
  IPlanetImageState,
  planetImageState,
} from "./planetImageState/planetImageState";
import { TPlanetImageAction } from "./interfaces/IActions";
import { PlanetImageTypes } from "./enum/PlanetImageTypes";

export const planetImageReducer = (
  state = planetImageState,
  action: TPlanetImageAction
): IPlanetImageState => {
  switch (action.type) {
    case PlanetImageTypes.FETCH_PLANET_IMAGE:
      return { ...state, loading: true };
    case PlanetImageTypes.FETCH_PLANET_IMAGE_SUCCESS:
      return { ...state, image: action.image };
    case PlanetImageTypes.FETCH_PLANET_IMAGE_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
