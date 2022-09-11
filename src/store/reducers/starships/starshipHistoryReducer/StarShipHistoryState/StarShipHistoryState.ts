import { IStarship } from "../../starshipReducer/initialState/interface/IStarshipState";

export interface IStarShipHistoryState {
  history: IStarship[];
}

export const StarShipHistoryState: IStarShipHistoryState = {
  history: [],
};
