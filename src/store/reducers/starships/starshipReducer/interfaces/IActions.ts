import { StarshipsActionTypes } from "../enum/StarshipsActionTypes";
import { IStarship } from "../initialState/starshipState";

interface IFetchStarshipAction {
  type: StarshipsActionTypes.FETCH_STARSHIPS;
}

interface IFetchStarshipSuccessAction {
  type: StarshipsActionTypes.FETCH_STARSHIPS_SUCCESS;
  payload: IStarship[];
  pages: number[];
  starshipsCount: number;
}

interface IFetchStarshipErrorAction {
  type: StarshipsActionTypes.FETCH_STARSHIPS_ERROR;
  payload: string;
}

interface ISetStarshipPage {
  type: StarshipsActionTypes.SET_STARSHIP_PAGE;
}

interface ISearchStarship {
  type: StarshipsActionTypes.SEARCH_STARSHIP;
  results: IStarship[];
}
export type TStarshipAction =
  | IFetchStarshipAction
  | IFetchStarshipSuccessAction
  | IFetchStarshipErrorAction
  | ISetStarshipPage
  | ISearchStarship;
