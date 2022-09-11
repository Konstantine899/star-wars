export interface IPlanetImageState {
  image: string;
  loading: boolean;
  error: string | null;
}

export const planetImageState: IPlanetImageState = {
  image: "",
  loading: false,
  error: "",
};
