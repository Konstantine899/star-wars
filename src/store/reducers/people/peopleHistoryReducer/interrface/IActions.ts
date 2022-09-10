import { PeopleHistoryActionType } from "../enum/PeopleHistoryActionType";
import { IPeople } from "../../peopleReducer/initialState/interface/IPeople";

export interface IGetPeopleHistory {
  type: PeopleHistoryActionType.PEOPLE_HISTORY_PUSH;
  payload: IPeople;
}
