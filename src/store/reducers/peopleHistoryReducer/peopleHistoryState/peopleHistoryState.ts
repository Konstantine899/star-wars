import { IPeople } from "../../peopleReducer/initialState/interface/IPeople";

export interface IPeopleHistoryState {
  history: IPeople[];
}

export const peopleHistoryState: IPeopleHistoryState = {
  history: [],
};
