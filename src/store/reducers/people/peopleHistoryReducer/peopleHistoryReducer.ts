import {
  IPeopleHistoryState,
  peopleHistoryState,
} from "./peopleHistoryState/peopleHistoryState";
import { TPeopleHistoryAction } from "./interrface/IActions";
import { PeopleHistoryActionType } from "./enum/PeopleHistoryActionType";

export const peopleHistoryReducer = (
  state = peopleHistoryState,
  action: TPeopleHistoryAction
): IPeopleHistoryState => {
  switch (action.type) {
    case PeopleHistoryActionType.PEOPLE_HISTORY_PUSH:
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
};
