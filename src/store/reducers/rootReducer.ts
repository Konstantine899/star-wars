import { combineReducers } from "redux";
import { peopleReducer } from "./peopleReducer/peopleReducer";
import { starshipReducer } from "./starshipReducer/starshipReducer";

export const rootReducer = combineReducers({
  people: peopleReducer,
  starships: starshipReducer,
});
