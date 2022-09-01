import { FC } from "react";
import Header from "../Header/Header";
import "./StarWars.css";
import RandomPlanetContainer from "../RandomPlanet/RandomPlanetContainer/RandomPlanetContainer";
import PeoplePage from "../pages/PeoplePage/PeoplePage";
import PlanetsPage from "../pages/PlanetsPage/PlanetsPage";
import StarshipsPage from "../pages/StarshipsPage/StarshipsPage";

const StarWars: FC = () => {
  return (
    <>
      <Header />
      <RandomPlanetContainer />
      <PeoplePage />
      <PlanetsPage />
      <StarshipsPage />
    </>
  );
};

export default StarWars;
