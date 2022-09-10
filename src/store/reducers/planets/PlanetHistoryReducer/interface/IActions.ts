import { PlanetHistoryActionType } from "../enum/PlanetHistoryActionType";
import { IPlanet } from "../../planetsReducer/initialState/interface/IPlanetState";

export interface IGetPlanetHistory {
  type: PlanetHistoryActionType.PLANET_HISTORY_PUSH;
  payload: IPlanet;
}
