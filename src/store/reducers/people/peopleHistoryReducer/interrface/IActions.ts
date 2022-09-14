import { PeopleHistoryActionType } from "../enum/PeopleHistoryActionType";
import { IPeople } from "../../peopleReducer/initialState/peopleState";

interface IGetPeopleHistory {
  type: PeopleHistoryActionType.PEOPLE_HISTORY_PUSH;
  payload: IPeople;
}

export type TPeopleHistoryAction = IGetPeopleHistory;
