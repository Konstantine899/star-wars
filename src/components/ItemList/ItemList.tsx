import React, { useEffect } from "react";
import "./ItemList.css";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchPeople } from "../../store/action-creators/fetchPeople";

const ItemList = () => {
  const { results } = useTypedSelector((state) => state.people);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(fetchPeople());
  }, [dispatch]);

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
