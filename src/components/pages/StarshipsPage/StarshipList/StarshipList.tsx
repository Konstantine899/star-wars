import React, { useEffect } from "react";
import { useStarWars } from "../../../../hooks/useStarWars";
import { useActions } from "../../../../store/hooks/useActions";

const StarshipList = () => {
  const { allStarships, getStarship } = useStarWars();
  const { getAllStarships } = useActions();

  useEffect(() => {
    getAllStarships();
  }, []);

  return (
    <>
      <ul className="item-list">
        {allStarships.map((item) => (
          <li
            className="item-list-element"
            key={item.name}
            onClick={() => getStarship(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default StarshipList;
