import { StarshipImageTypes } from "../enum/StarshipImageTypes";

export interface IFetchStarshipImageAction {
  type: StarshipImageTypes.FETCH_STARSHIP_IMAGE;
}

export interface IFetchStarshipImageSuccessAction {
  type: StarshipImageTypes.FETCH_STARSHIP_IMAGE_SUCCESS;
  image: string;
}

export interface IFetchStarshipImageErrorAction {
  type: StarshipImageTypes.FETCH_STARSHIP_IMAGE_ERROR;
  error: string;
}
