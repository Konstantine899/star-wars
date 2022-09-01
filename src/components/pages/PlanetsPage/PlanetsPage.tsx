import React from "react";
import Row from "../Row/Row";
import PlanetList from "./PlanetList/PlanetList";
import PlanetDetails from "./PlanetDetails/PlanetDetails";

const PlanetsPage = () => {
  return <Row left={<PlanetList />} right={<PlanetDetails />} />;
};

export default PlanetsPage;
