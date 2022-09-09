export interface IPeople {
  id: string;
  name: string;
  gender: string;
  birth_year: string;
}

export interface IPeopleState {
  results: IPeople[];
  currentPage: number;
  pages: number[];
  peopleCount: number;
  loading: boolean;
  error: null | string;
}
