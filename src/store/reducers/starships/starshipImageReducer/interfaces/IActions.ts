import { StarshipImageTypes } from "../enum/StarshipImageTypes";

interface IFetchStarshipImageAction {
  type: StarshipImageTypes.FETCH_STARSHIP_IMAGE;
}

interface IFetchStarshipImageSuccessAction {
  type: StarshipImageTypes.FETCH_STARSHIP_IMAGE_SUCCESS;
  image: string;
}

interface IFetchStarshipImageErrorAction {
  type: StarshipImageTypes.FETCH_STARSHIP_IMAGE_ERROR;
  error: string;
}
export type TStarshipImageAction =
  | IFetchStarshipImageAction
  | IFetchStarshipImageErrorAction
  | IFetchStarshipImageSuccessAction;
