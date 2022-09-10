import { StarshipsActionTypes } from "../enum/StarshipsActionTypes";
import { IStarship } from "../initialState/interface/IStarshipState";

export interface IFetchStarshipAction {
  type: StarshipsActionTypes.FETCH_STARSHIPS;
}

export interface IFetchStarshipSuccessAction {
  type: StarshipsActionTypes.FETCH_STARSHIPS_SUCCESS;
  payload: IStarship[];
  pages: number[];
  starshipsCount: number;
}

export interface IFetchStarshipErrorAction {
  type: StarshipsActionTypes.FETCH_STARSHIPS_ERROR;
  payload: string;
}

export interface ISetStarshipPage {
  type: StarshipsActionTypes.SET_STARSHIP_PAGE;
}
