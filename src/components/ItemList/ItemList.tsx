import React, { useEffect } from "react";
import "./ItemList.css";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { useActions } from "../../store/hooks/useActions";

const ItemList = () => {
  const resultsPeople = useTypedSelector((state) => state.people);

  const { getAllPeople, getAllStarships } = useActions();

  useEffect(() => {
    getAllPeople();
    getAllStarships();
  }, []);

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
