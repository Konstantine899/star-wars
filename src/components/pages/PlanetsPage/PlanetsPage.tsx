import React from "react";
import Row from "../Row/Row";
import PlanetDetails from "./PlanetDetails/PlanetDetails";
import ItemList from "../ItemList/ItemList";
import { useStarWars } from "../../../hooks/useStarWars";
import { useActions } from "../../../store/hooks/useActions";

const PlanetsPage = () => {
  const { allPlanets, getPlanet } = useStarWars();
  const { getAllPlanets } = useActions();
  return (
    <Row
      left={
        <ItemList
          data={allPlanets}
          onItemSelected={getPlanet}
          allActions={getAllPlanets}
        />
      }
      right={<PlanetDetails />}
    />
  );
};

export default PlanetsPage;
