import React, { FC } from "react";
import { IPlanet } from "../../../store/reducers/planets/planetsReducer/initialState/planetState";

interface IProps {
  planet: IPlanet;
}

const PlanetDetails: FC<IProps> = ({ planet }) => {
  return (
    <div>
      <h4>{planet.name}</h4>
      <ul className="random-planet">
        <li className="random-planet-list-item">
          <span className="term">Population</span>
          <span>{planet.population}</span>
        </li>
        <li className="random-planet-list-item">
          <span className="term">Rotation Period</span>
          <span>{planet.rotation_period}</span>
        </li>
        <li className="random-planet-list-item">
          <span className="term">Diameter</span>
          <span>{planet.diameter}</span>
        </li>
      </ul>
    </div>
  );
};

export default PlanetDetails;
