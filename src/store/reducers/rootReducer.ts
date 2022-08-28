import { combineReducers } from "redux";
import { peopleReducer } from "./peopleReducer/peopleReducer";

export const rootReducer = combineReducers({
  people: peopleReducer,
});
