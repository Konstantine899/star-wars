import React, { FC, useEffect } from "react";
import { IPeople } from "../../../store/reducers/peopleReducer/initialState/interface/IPeople";
import { IPlanet } from "../../../store/reducers/planetsReducer/initialState/interface/IPlanetState";
import { IStarship } from "../../../store/reducers/starshipReducer/initialState/interface/IStarshipState";
import "./ItemList.css";

interface IItem {
  data: IPeople[] | IPlanet[] | IStarship[];
  onItemSelected: (id: string) => void;
  allActions: () => void;
}

const ItemList: FC<IItem> = ({ data, onItemSelected, allActions }) => {
  useEffect(() => {
    allActions();
  }, []);
  return (
    <>
      <ul className="item-list">
        {data.map((item) => (
          <li
            className="item-list-element"
            key={item.name}
            onClick={() => onItemSelected(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
