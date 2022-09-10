import React, { useEffect, useState } from "react";
import "../RandomPlanet.css";
import { useActions } from "../../../store/hooks/useActions";
import { useStarWars } from "../../../hooks/useStarWars";
import { IPlanet } from "../../../store/reducers/planets/planetsReducer/initialState/interface/IPlanetState";
import RandomPlanetDefault from "../RandomPlanetDefault/RandomPlanetDefault";
import RandomPlanet from "../RandomPlanet";
import { useInterval } from "../../../hooks/useInterval";

const RandomPlanetContainer = () => {
  const [planet, setPlanet] = useState<IPlanet | null>(null);

  const { getAllPlanets } = useActions();
  const { allPlanets } = useStarWars();

  useEffect(() => {
    getAllPlanets();
  }, []);

  useInterval(() => {
    const id = (Math.floor(Math.random() * 10) + 2).toString();
    allPlanets.filter((item) => {
      if (item.id === id) return setPlanet(item);
    });
  }, 3000);

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
