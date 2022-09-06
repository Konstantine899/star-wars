import React from "react";
import History from "./History/History";
import ItemHistory from "./ItemHistory/ItemHistory";
import { useStarWars } from "../../../hooks/useStarWars";

const HistoryPage = () => {
  const { peopleHistory, planetHistory, starshipHistory } = useStarWars();
  const people = peopleHistory.map((person) => (
    <li key={Math.random()}>{person.name}</li>
  ));

  const planet = planetHistory.map((planet) => (
    <li key={Math.random()}>{planet.name}</li>
  ));

  const starship = starshipHistory.map((starship) => (
    <li key={Math.random()}>{starship.name}</li>
  ));

  return (
    <History>
      <ItemHistory title="Person" data={people} />
      <ItemHistory title="Planets" data={planet} />
      <ItemHistory title="Starships" data={starship} />
    </History>
  );
};

export default HistoryPage;
