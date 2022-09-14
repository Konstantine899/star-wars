import React, { FC } from "react";
import "./ItemDetails.css";
import { IPeople } from "../../../store/reducers/people/peopleReducer/initialState/peopleState";
import { IPlanet } from "../../../store/reducers/planets/planetsReducer/initialState/planetState";
import { IStarship } from "../../../store/reducers/starships/starshipReducer/initialState/starshipState";

interface IProps {
  data: IPeople | IPlanet | IStarship | null;
  image: string;
  children: JSX.Element | JSX.Element[];
  loading: boolean;
}

const ItemDetails: FC<IProps> = ({ children, data, image, loading }) => {
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
