import React, { FC } from "react";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import "./StarWars.css";
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";

const StarWars: FC = () => {
  const { results } = useTypedSelector((state) => state.people);
  console.log(results);
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
