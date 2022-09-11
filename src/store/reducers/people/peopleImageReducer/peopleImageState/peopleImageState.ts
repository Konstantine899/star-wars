export interface IPeopleImageState {
  image: string;
  loading: boolean;
  error: string | null;
}

export const peopleImageState: IPeopleImageState = {
  image: "",
  loading: false,
  error: "",
};
