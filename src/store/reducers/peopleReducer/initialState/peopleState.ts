import { IPeopleState } from "./interface/IPeople";

export const peopleState: IPeopleState = {
  results: [],
  loading: false,
  error: null,
  currentPage: 1,
  pages: [],
  peopleCount: 0,
};
