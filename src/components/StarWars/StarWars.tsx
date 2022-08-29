import { FC } from "react";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import "./StarWars.css";
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";

const StarWars: FC = () => {
  return (
    <>
      <Header />
      <RandomPlanet />
      <div className="detailed-information">
        <ItemList />
        <PersonDetails />
      </div>
    </>
  );
};

export default StarWars;
