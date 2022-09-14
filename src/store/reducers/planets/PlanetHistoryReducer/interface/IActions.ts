import { PlanetHistoryActionType } from "../enum/PlanetHistoryActionType";
import { IPlanet } from "../../planetsReducer/initialState/planetState";

interface IGetPlanetHistory {
  type: PlanetHistoryActionType.PLANET_HISTORY_PUSH;
  payload: IPlanet;
}

export type TPlanetHistoryAction = IGetPlanetHistory;
