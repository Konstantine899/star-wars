import { PlanetImageTypes } from "../enum/PlanetImageTypes";

export interface IFetchPlanetImage {
  type: PlanetImageTypes.FETCH_PLANET_IMAGE;
}

export interface IFetchPlanetImageSuccess {
  type: PlanetImageTypes.FETCH_PLANET_IMAGE_SUCCESS;
  image: string;
}
export interface IFetchPlanetImageError {
  type: PlanetImageTypes.FETCH_PLANET_IMAGE_ERROR;
  error: string | null;
}
