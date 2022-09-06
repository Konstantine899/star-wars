import { combineReducers } from "redux";
import { peopleReducer } from "./peopleReducer/peopleReducer";
import { starshipReducer } from "./starshipReducer/starshipReducer";
import { planetsReducer } from "./planetsReducer/planetsReducer";
import { peopleHistoryReducer } from "./peopleHistoryReducer/peopleHistoryReducer";
import { PlanetHistoryReducer } from "./PlanetHistoryReducer/PlanetHistoryReducer";
import { StarShipHistoryReducer } from "./StarShipHistoryReducer/StarShipHistoryReducer";

export const rootReducer = combineReducers({
  people: peopleReducer,
  starships: starshipReducer,
  planets: planetsReducer,
  peopleHistory: peopleHistoryReducer,
  planetHistory: PlanetHistoryReducer,
  starshipHistory: StarShipHistoryReducer,
});
