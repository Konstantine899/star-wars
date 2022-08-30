import React, { FC, useEffect } from "react";
import "./ItemList.css";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { useActions } from "../../store/hooks/useActions";

const ItemList: FC = () => {
  const resultsPeople = useTypedSelector((state) => state.people);
  const resultsStarships = useTypedSelector((state) => state.starships);
  const resultsPlanets = useTypedSelector((state) => state.planets);

  const { getAllPeople, getAllStarships, getAllPlanet } = useActions();

  useEffect(() => {
    getAllPlanet();
    getAllPeople();
    getAllStarships();
  }, []);

  console.log("resultsStarships", resultsStarships);
  console.log("resultsPlanets", resultsPlanets);

  return (
    <>
      <ul className="item-list">
        {resultsPeople.results.map((item) => (
          <li className="item-list-element" key={item.name}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
