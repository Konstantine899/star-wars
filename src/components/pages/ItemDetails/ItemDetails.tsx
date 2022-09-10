import React, { FC } from "react";
import "./ItemDetails.css";
import { IPeople } from "../../../store/reducers/people/peopleReducer/initialState/interface/IPeople";
import { IPlanet } from "../../../store/reducers/planets/planetsReducer/initialState/interface/IPlanetState";
import { IStarship } from "../../../store/reducers/starships/starshipReducer/initialState/interface/IStarshipState";

interface IItemDetails {
  data: IPeople | IPlanet | IStarship | null;
  image: string;
  children: JSX.Element | JSX.Element[];
  loading: boolean;
}

const ItemDetails: FC<IItemDetails> = ({ children, data, image, loading }) => {
  return (
    <>
      {data === null || loading ? null : (
        <div className="card-details card">
          <img className="card-image" src={image} alt="" />

          <div className="card-body">
            <h4>{data.name}</h4>
            <ul className="list-group list-group-flush">{children}</ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetails;
