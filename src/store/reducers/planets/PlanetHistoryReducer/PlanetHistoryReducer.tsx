import {
  IPlanetHistoryState,
  PlanetHistoryState,
} from "./PlanetHistoryState/PlanetHistoryState";
import { TPlanetHistoryAction } from "./interface/IActions";
import { PlanetHistoryActionType } from "./enum/PlanetHistoryActionType";

export const PlanetHistoryReducer = (
  state = PlanetHistoryState,
  action: TPlanetHistoryAction
): IPlanetHistoryState => {
  switch (action.type) {
    case PlanetHistoryActionType.PLANET_HISTORY_PUSH:
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
};
