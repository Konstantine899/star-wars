import {
  IStarShipHistoryState,
  StarShipHistoryState,
} from "./StarShipHistoryState/StarShipHistoryState";
import { TStarshipHistoryAction } from "./type/TStarshipHistoryAction";
import { StarshipHistoryActionType } from "./enum/StarshipHistoryActionType";

export const StarShipHistoryReducer = (
  state = StarShipHistoryState,
  action: TStarshipHistoryAction
): IStarShipHistoryState => {
  switch (action.type) {
    case StarshipHistoryActionType.STARSHIP_HISTORY_PUSH:
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
};
