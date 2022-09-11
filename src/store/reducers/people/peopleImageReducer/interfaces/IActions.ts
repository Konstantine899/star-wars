import { PeopleImageTypes } from "../enum/PeopleImageTypes";

export interface IFetchImage {
  type: PeopleImageTypes.FETCH_PEOPLE_IMAGE;
}

export interface IFetchImageSuccess {
  type: PeopleImageTypes.FETCH_PEOPLE_IMAGE_SUCCESS;
  image: string;
}

export interface IFetchImageError {
  type: PeopleImageTypes.FETCH_PEOPLE_IMAGE_ERROR;
  error: string | null;
}
