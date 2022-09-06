import React from "react";
import StarWars from "./components/StarWars/StarWars";
import { Provider } from "react-redux";
import { store } from "./store";
import { StarWarsProvider } from "./context/StarWarsProvider/StarWarsProvider";
import ErrorBoundary from "./components/ErrorHandler/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <StarWarsProvider>
          <StarWars />
        </StarWarsProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
