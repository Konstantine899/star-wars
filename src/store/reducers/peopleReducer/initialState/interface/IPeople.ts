export interface IPeople {
  id: string;
  name: string;
  gender: string;
  birth_year: string;
}

export interface IPeopleState {
  results: IPeople[];
  loading: boolean;
  error: null | string;
}
