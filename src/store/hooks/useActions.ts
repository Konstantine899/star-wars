import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as PeopleActionCreators from "../action-creators/action-creators-people";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(PeopleActionCreators, dispatch);
};
