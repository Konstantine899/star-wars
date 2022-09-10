import { StarshipHistoryActionType } from "../enum/StarshipHistoryActionType";
import { IStarship } from "../../starshipReducer/initialState/interface/IStarshipState";

export interface IGetStarshipHistory {
  type: StarshipHistoryActionType.STARSHIP_HISTORY_PUSH;
  payload: IStarship;
}
