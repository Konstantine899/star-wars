import React, { FC } from "react";
import { IPlanet } from "../../../store/reducers/planets/planetsReducer/initialState/planetState";

interface IProps {
  planet: IPlanet;
}

enum RandomPlanetImageUrl {
  BASE_URL = `https://starwars-visualguide.com/assets/img`,
  PLANETS = `/planets/`,
  EXTENSION = `.jpg`,
}

const RandomPlanetImage: FC<IProps> = ({ planet }) => {
  return (
    <img
      className="planet-image"
      src={`${RandomPlanetImageUrl.BASE_URL}${RandomPlanetImageUrl.PLANETS}${planet.id}${RandomPlanetImageUrl.EXTENSION}`}
      alt=""
    />
  );
};

export default RandomPlanetImage;
