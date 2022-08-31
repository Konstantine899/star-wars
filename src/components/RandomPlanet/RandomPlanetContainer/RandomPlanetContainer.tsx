import React, { useEffect, useState } from "react";
import "../RandomPlanet.css";
import { useActions } from "../../../store/hooks/useActions";
import { useStarWars } from "../../../hooks/useStarWars";
import { IPlanet } from "../../../store/reducers/planetsReducer/initialState/interface/IPlanetState";
import RandomPlanetDefault from "../RandomPlanetDefault/RandomPlanetDefault";
import RandomPlanet from "../RandomPlanet";

const RandomPlanetContainer = () => {
  const [planet, setPlanet] = useState<IPlanet | null>(null);

  const { getAllPlanet } = useActions();
  const { allPlanets } = useStarWars();

  useEffect(() => {
    getAllPlanet();
  }, []);

  const updateRandomPlanet = () => {
    const id = (Math.floor(Math.random() * 10) + 2).toString();
    allPlanets.filter((item) => {
      if (item.id === id) return setPlanet(item);
    });
  };

  setInterval(() => updateRandomPlanet(), 10000);

  return (
    <>
      {planet === null ? (
        <RandomPlanetDefault />
      ) : (
        <RandomPlanet planet={planet} />
      )}
    </>
  );
};

export default RandomPlanetContainer;
