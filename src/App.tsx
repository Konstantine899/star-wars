import React from "react";
import StarWars from "./components/StarWars/StarWars";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <StarWars />
    </Provider>
  );
}

export default App;
