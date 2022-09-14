import { StarshipHistoryActionType } from "../enum/StarshipHistoryActionType";
import { IStarship } from "../../starshipReducer/initialState/starshipState";

interface IGetStarshipHistory {
  type: StarshipHistoryActionType.STARSHIP_HISTORY_PUSH;
  payload: IStarship;
}
export type TStarshipHistoryAction = IGetStarshipHistory;
