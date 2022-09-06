import React, { FC, useEffect } from "react";
import { IPeople } from "../../../store/reducers/peopleReducer/initialState/interface/IPeople";
import { IPlanet } from "../../../store/reducers/planetsReducer/initialState/interface/IPlanetState";
import { IStarship } from "../../../store/reducers/starshipReducer/initialState/interface/IStarshipState";
import "./ItemList.css";
import Spinner from "../../Spinner/Spinner";

interface IItem {
  data: IPeople[] | IPlanet[] | IStarship[];
  onItemSelected: (id: string) => void;
  allActions: () => void;
  loading: boolean;
}

const ItemList: FC<IItem> = ({ data, onItemSelected, allActions, loading }) => {
  useEffect(() => {
    allActions();
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
};

export default ItemList;
