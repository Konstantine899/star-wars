import { PlanetImageTypes } from "../enum/PlanetImageTypes";

interface IFetchPlanetImage {
  type: PlanetImageTypes.FETCH_PLANET_IMAGE;
}

interface IFetchPlanetImageSuccess {
  type: PlanetImageTypes.FETCH_PLANET_IMAGE_SUCCESS;
  image: string;
}
interface IFetchPlanetImageError {
  type: PlanetImageTypes.FETCH_PLANET_IMAGE_ERROR;
  error: string | null;
}
export type TPlanetImageAction =
  | IFetchPlanetImage
  | IFetchPlanetImageSuccess
  | IFetchPlanetImageError;
