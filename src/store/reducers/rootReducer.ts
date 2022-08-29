import { combineReducers } from "redux";
import { peopleReducer } from "./peopleReducer/peopleReducer";
import { starshipReducer } from "./starshipReducer/starshipReducer";
import { planetsReducer } from "./planetsReducer/planetsReducer";

export const rootReducer = combineReducers({
  people: peopleReducer,
  starships: starshipReducer,
  planets: planetsReducer,
});
