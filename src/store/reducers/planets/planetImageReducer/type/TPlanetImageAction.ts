import {
  IFetchPlanetImage,
  IFetchPlanetImageError,
  IFetchPlanetImageSuccess,
} from "../interfaces/IActions";

export type TPlanetImageAction =
  | IFetchPlanetImage
  | IFetchPlanetImageSuccess
  | IFetchPlanetImageError;
