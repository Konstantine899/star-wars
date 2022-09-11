import {
  IFetchImage,
  IFetchImageError,
  IFetchImageSuccess,
} from "../interfaces/IActions";

export type TPeopleImageAction =
  | IFetchImage
  | IFetchImageSuccess
  | IFetchImageError;
