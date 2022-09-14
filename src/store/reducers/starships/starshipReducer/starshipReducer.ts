import { IStarshipState } from "./initialState/starshipState";
import { TStarshipAction } from "./interfaces/IActions";
import { StarshipsActionTypes } from "./enum/StarshipsActionTypes";
import { starshipState } from "./initialState/starshipState";

export const starshipReducer = (
  state = starshipState,
  action: TStarshipAction
): IStarshipState => {
  switch (action.type) {
    case StarshipsActionTypes.FETCH_STARSHIPS:
      return {
        ...state,
        loading: true,
        error: null,
        results: [],
        pages: [],
        starshipsCount: 0,
      };
    case StarshipsActionTypes.FETCH_STARSHIPS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        results: action.payload,
        pages: action.pages,
        starshipsCount: action.starshipsCount,
      };
    case StarshipsActionTypes.FETCH_STARSHIPS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        results: [],
        pages: [],
        starshipsCount: 0,
      };
    case StarshipsActionTypes.SEARCH_STARSHIP:
      return { ...state, results: action.results };
    case StarshipsActionTypes.SET_STARSHIP_PAGE:
      return { ...state, loading: true, pages: [] };
    default:
      return state;
  }
};
