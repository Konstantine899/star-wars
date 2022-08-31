import { FC } from "react";
import Header from "../Header/Header";
import "./StarWars.css";
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";
import RandomPlanetContainer from "../RandomPlanet/RandomPlanetContainer/RandomPlanetContainer";

const StarWars: FC = () => {
  return (
    <>
      <Header />
      <RandomPlanetContainer />
      <div className="detailed-information">
        <ItemList />
        <PersonDetails />
      </div>
    </>
  );
};

export default StarWars;
