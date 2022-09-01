import React from "react";
import Row from "../Row/Row";
import StarshipList from "./StarshipList/StarshipList";
import StarshipDetails from "./StarshipDetails/StarshipDetails";

const StarshipsPage = () => {
  return <Row left={<StarshipList />} right={<StarshipDetails />} />;
};

export default StarshipsPage;
