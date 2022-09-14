import React, { FC } from "react";
import { IPlanet } from "../../store/reducers/planets/planetsReducer/initialState/planetState";
import PlanetDetails from "./PlanetDetails/PlanetDetails";
import RandomPlanetImage from "./RandomPlanetImage/RandomPlanetImage";

interface IProps {
  planet: IPlanet;
}

const RandomPlanet: FC<IProps> = ({ planet }) => {
  return (
    <div className="random-planet jumbotron rounded">
      <RandomPlanetImage planet={planet} />
      <PlanetDetails planet={planet} />
    </div>
  );
};

export default RandomPlanet;
