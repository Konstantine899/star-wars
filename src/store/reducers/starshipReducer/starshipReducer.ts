import { IStarshipState } from "./initialState/interface/IStarshipState";
import { TStarshipAction } from "./types/TStarshipAction";
import { StarshipsActionTypes } from "./enum/StarshipsActionTypes";
import { starshipState } from "./initialState/starshipState";

export const starshipReducer = (
  state = starshipState,
  action: TStarshipAction
): IStarshipState => {
  switch (action.type) {
    case StarshipsActionTypes.FETCH_STARSHIPS:
      return { loading: true, error: null, results: [] };
    case StarshipsActionTypes.FETCH_STARSHIPS_SUCCESS:
      return { loading: false, error: null, results: action.payload };
    case StarshipsActionTypes.FETCH_STARSHIPS_ERROR:
      return { loading: false, error: action.payload, results: [] };
    default:
      return state;
  }
};
