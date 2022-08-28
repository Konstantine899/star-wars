import { useSelector, TypedUseSelectorHook } from "react-redux";
import { TRootReducer } from "../index";

export const useTypedSelector: TypedUseSelectorHook<TRootReducer> = useSelector;
