import React, { FC, useEffect } from "react";
import "./ItemList.css";
import { useActions } from "../../store/hooks/useActions";
import { useStarWars } from "../../hooks/useStarWars";

const ItemList: FC = () => {
  const { allPeople, getPeople } = useStarWars();
  const { getAllPeople } = useActions();

  useEffect(() => {
    getAllPeople();
  }, []);

  return (
    <>
      <ul className="item-list">
        {allPeople.map((item) => (
          <li
            className="item-list-element"
            key={item.name}
            onClick={() => getPeople(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
