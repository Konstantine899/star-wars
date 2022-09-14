import { IStarship } from "../../starshipReducer/initialState/starshipState";

export interface IStarShipHistoryState {
  history: IStarship[];
}

export const StarShipHistoryState: IStarShipHistoryState = {
  history: [],
};
