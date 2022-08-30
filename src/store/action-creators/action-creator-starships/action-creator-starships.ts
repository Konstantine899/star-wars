import {
  IStarship,
  IStarshipState,
} from "../../reducers/starshipReducer/initialState/interface/IStarshipState";
import { extractId } from "../services/extractId";
import { Dispatch } from "redux";
import { TStarshipAction } from "../../reducers/starshipReducer/types/TStarshipAction";
import { StarshipsActionTypes } from "../../reducers/starshipReducer/enum/StarshipsActionTypes";
import { gettingData } from "../services/gettingData";
import { SwapiUrl } from "../enum/SwapiUrl";

function transformStarships(body: IStarshipState) {
  return body.results.map((starship: IStarship) => ({
    id: extractId(starship),
    name: starship.name,
    model: starship.model,
    cost_in_credits: starship.cost_in_credits,
    starship_class: starship.starship_class,
  }));
}

export const getAllStarships = () => {
  return async (dispatch: Dispatch<TStarshipAction>) => {
    try {
      dispatch({ type: StarshipsActionTypes.FETCH_STARSHIPS });
      dispatch({
        type: StarshipsActionTypes.FETCH_STARSHIPS_SUCCESS,
        payload: transformStarships(
          await gettingData(`${SwapiUrl.STARSHIPS_URL}`)
        ),
      });
    } catch (error) {
      dispatch({
        type: StarshipsActionTypes.FETCH_STARSHIPS_ERROR,
        payload: "Error loading Starships",
      });
    }
  };
};
