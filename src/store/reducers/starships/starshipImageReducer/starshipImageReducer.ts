import {
  IStarshipImageState,
  starshipImageState,
} from "./starshipImageState/starshipImageState";
import { TStarshipImageAction } from "./interfaces/IActions";
import { StarshipImageTypes } from "./enum/StarshipImageTypes";

export const starshipImageReducer = (
  state = starshipImageState,
  action: TStarshipImageAction
): IStarshipImageState => {
  switch (action.type) {
    case StarshipImageTypes.FETCH_STARSHIP_IMAGE:
      return { ...state, loading: true };
    case StarshipImageTypes.FETCH_STARSHIP_IMAGE_SUCCESS:
      return { ...state, image: action.image };
    case StarshipImageTypes.FETCH_STARSHIP_IMAGE_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
