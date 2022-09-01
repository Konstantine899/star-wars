import React, { useEffect } from "react";
import { useActions } from "../../../../store/hooks/useActions";
import { useStarWars } from "../../../../hooks/useStarWars";

const PlanetList = () => {
  const { allPlanets, getPlanet } = useStarWars();
  const { getAllPlanets } = useActions();

  useEffect(() => {
    getAllPlanets();
  }, []);

  return (
    <>
      <ul className="item-list">
        {allPlanets.map((item) => (
          <li
            className="item-list-element"
            key={item.name}
            onClick={() => getPlanet(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlanetList;
