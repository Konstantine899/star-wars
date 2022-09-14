import React, { FC, useEffect } from "react";
import { IPlanet } from "../../store/reducers/planets/planetsReducer/initialState/interface/IPlanetState";
import { useStarWars } from "../../hooks/useStarWars";

interface IProps {
  planet: IPlanet;
}

const RandomPlanet: FC<IProps> = ({ planet }) => {
  const { getPlanetImage, planetImage } = useStarWars();
  useEffect(() => {
    getPlanetImage(planet.id);
  }, [planetImage, planet]);
  return (
    <div className="random-planet jumbotron rounded">
      <img className="planet-image" src={planetImage} alt="" />
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
    </div>
  );
};

export default RandomPlanet;
