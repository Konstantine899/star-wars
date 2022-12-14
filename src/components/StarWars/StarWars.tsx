import { FC } from "react";
import Header from "../Header/Header";
import RandomPlanetContainer from "../RandomPlanet/RandomPlanetContainer/RandomPlanetContainer";
import PeoplePage from "../pages/PeoplePage/PeoplePage";
import PlanetsPage from "../pages/PlanetsPage/PlanetsPage";
import StarshipsPage from "../pages/StarshipsPage/StarshipsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistoryPage from "../pages/HistoryPage/HistoryPage";
import MainPage from "../pages/MainPage/MainPage";

const StarWars: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RandomPlanetContainer />

        <Routes>
          <Route path={`/`} element={<MainPage />} />
          <Route path="/people/*" element={<PeoplePage />}>
            <Route path={`?page=`} element={<PeoplePage />} />
          </Route>
          <Route path="/planets/*" element={<PlanetsPage />} />
          <Route path="/starships/*" element={<StarshipsPage />} />
          <Route path="/history/*" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default StarWars;
