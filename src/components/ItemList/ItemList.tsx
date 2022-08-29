import React, { useEffect } from "react";
import "./ItemList.css";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { useActions } from "../../store/hooks/useActions";

const ItemList = () => {
  const { results } = useTypedSelector((state) => state.people);

  const { fetchPeople } = useActions();
  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <ul className="item-list">
      {results.map((item) => (
        <li className="item-list-element" key={item.name}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
