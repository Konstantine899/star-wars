import React from "react";
import StarWars from "./components/StarWars/StarWars";
import { Provider } from "react-redux";
import { store } from "./store";
import { StarWarsProvider } from "./context/StarWarsProvider/StarWarsProvider";

function App() {
  return (
    <Provider store={store}>
      <StarWarsProvider>
        <StarWars />
      </StarWarsProvider>
    </Provider>
  );
}

export default App;
