import { IPeople } from "../../peopleReducer/initialState/peopleState";

export interface IPeopleHistoryState {
  history: IPeople[];
}

export const peopleHistoryState: IPeopleHistoryState = {
  history: [],
};
