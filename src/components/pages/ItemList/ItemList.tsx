import React, { FC, useEffect } from "react";
import { IPeople } from "../../../store/reducers/people/peopleReducer/initialState/peopleState";
import { IPlanet } from "../../../store/reducers/planets/planetsReducer/initialState/planetState";
import { IStarship } from "../../../store/reducers/starships/starshipReducer/initialState/starshipState";
import "./ItemList.css";
import Spinner from "../../Spinner/Spinner";

interface IProps {
  data: IPeople[] | IPlanet[] | IStarship[];
  onItemSelected: (id: string) => void;
  allActions: () => void;
  loading: boolean;
}

const ItemList: FC<IProps> = ({
  data,
  onItemSelected,
  allActions,
  loading,
}) => {
  useEffect(() => {
    allActions();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
};

export default ItemList;
