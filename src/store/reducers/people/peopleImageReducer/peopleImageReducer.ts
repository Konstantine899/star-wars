import {
  IPeopleImageState,
  peopleImageState,
} from "./peopleImageState/peopleImageState";
import { TPeopleImageAction } from "./type/TPeopleImageAction";
import { PeopleImageTypes } from "./enum/PeopleImageTypes";

export const peopleImageReducer = (
  state = peopleImageState,
  action: TPeopleImageAction
): IPeopleImageState => {
  switch (action.type) {
    case PeopleImageTypes.FETCH_PEOPLE_IMAGE:
      return { ...state, loading: true };
    case PeopleImageTypes.FETCH_PEOPLE_IMAGE_SUCCESS:
      return { ...state, image: action.image };
    case PeopleImageTypes.FETCH_PEOPLE_IMAGE_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
