import { PeopleImageTypes } from "../enum/PeopleImageTypes";

interface IFetchImage {
  type: PeopleImageTypes.FETCH_PEOPLE_IMAGE;
}

interface IFetchImageSuccess {
  type: PeopleImageTypes.FETCH_PEOPLE_IMAGE_SUCCESS;
  image: string;
}

interface IFetchImageError {
  type: PeopleImageTypes.FETCH_PEOPLE_IMAGE_ERROR;
  error: string | null;
}
export type TPeopleImageAction =
  | IFetchImage
  | IFetchImageSuccess
  | IFetchImageError;
