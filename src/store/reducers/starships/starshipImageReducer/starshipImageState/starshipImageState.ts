export interface IStarshipImageState {
  image: string;
  loading: boolean;
  error: string | boolean;
}

export const starshipImageState: IStarshipImageState = {
  image: "",
  loading: false,
  error: "",
};
