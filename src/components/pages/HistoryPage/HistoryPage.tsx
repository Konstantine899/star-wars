import React, { FC } from "react";
import History from "./History/History";
import ItemHistory from "./ItemHistory/ItemHistory";
import { useStarWars } from "../../../hooks/useStarWars";
import "./HistoryPage.css";

const HistoryPage: FC = () => {
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
    <>
      {planet.length || starship.length || people.length ? (
        <div className="history-page">
          <h1>Browsing history</h1>
          <History>
            <ItemHistory title="People" data={people} />
            <ItemHistory title="Planets" data={planet} />
            <ItemHistory title="Starships" data={starship} />
          </History>
        </div>
      ) : (
        <h3 className="history_is_empty">Browsing history is empty</h3>
      )}
    </>
  );
};

export default HistoryPage;
