import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./reducers/rootReducer";

function saveToLocalStorage(state: any) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("State", serialisedState);
  } catch (error) {
    console.warn(error);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("State");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (error) {
    console.warn(error);
  }
}

export const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export type TRootReducer = ReturnType<typeof rootReducer>;
