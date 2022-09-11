import { combineReducers } from "redux";
import { peopleReducer } from "./people/peopleReducer/peopleReducer";
import { starshipReducer } from "./starships/starshipReducer/starshipReducer";
import { planetsReducer } from "./planets/planetsReducer/planetsReducer";
import { peopleHistoryReducer } from "./people/peopleHistoryReducer/peopleHistoryReducer";
import { PlanetHistoryReducer } from "./planets/PlanetHistoryReducer/PlanetHistoryReducer";
import { StarshipHistoryReducer } from "./starships/starshipHistoryReducer/starshipHistoryReducer";
import { peopleImageReducer } from "./people/peopleImageReducer/peopleImageReducer";
import { planetImageReducer } from "./planets/planetImageReducer/planetImageReducer";
import { starshipImageReducer } from "./starships/starshipImageReducer/starshipImageReducer";

export const rootReducer = combineReducers({
  people: peopleReducer,
  starships: starshipReducer,
  planets: planetsReducer,
  peopleHistory: peopleHistoryReducer,
  planetHistory: PlanetHistoryReducer,
  starshipHistory: StarshipHistoryReducer,
  peopleImage: peopleImageReducer,
  planetImage: planetImageReducer,
  starshipImage: starshipImageReducer,
});
