export interface IPeople {
  id: string;
  name: string;
  gender: string;
  birth_year: string;
}

export interface IPeopleState {
  results: IPeople[];
  pages: number[];
  peopleCount: number;
  loading: boolean;
  error: null | string;
}
export const peopleState: IPeopleState = {
  results: [],
  loading: false,
  error: null,
  pages: [],
  peopleCount: 0,
};
