import { combineReducers } from "redux";
import { peopleReducer } from "./people/peopleReducer/peopleReducer";
import { starshipReducer } from "./starships/starshipReducer/starshipReducer";
import { planetsReducer } from "./planets/planetsReducer/planetsReducer";
import { peopleHistoryReducer } from "./people/peopleHistoryReducer/peopleHistoryReducer";
import { PlanetHistoryReducer } from "./planets/PlanetHistoryReducer/PlanetHistoryReducer";
import { StarShipHistoryReducer } from "./starships/StarShipHistoryReducer/StarShipHistoryReducer";

export const rootReducer = combineReducers({
  people: peopleReducer,
  starships: starshipReducer,
  planets: planetsReducer,
  peopleHistory: peopleHistoryReducer,
  planetHistory: PlanetHistoryReducer,
  starshipHistory: StarShipHistoryReducer,
});
