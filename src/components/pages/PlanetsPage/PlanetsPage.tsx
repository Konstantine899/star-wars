import React, { useEffect, useState } from "react";
import Row from "../Row/Row";
import ItemList from "../ItemList/ItemList";
import { useStarWars } from "../../../hooks/useStarWars";
import { useActions } from "../../../store/hooks/useActions";
import ItemDetails from "../ItemDetails/ItemDetails";
import Details from "../ItemDetails/Details/Details";

const PlanetsPage = () => {
  const [image, setImage] = useState("");

  const { allPlanets, getPlanet, planet, getPlanetImage, loadingPlanets } =
    useStarWars();
  const { getAllPlanets } = useActions();

  useEffect(() => {
    if (planet === null) return;
    setImage(getPlanetImage(planet.id));
  }, [planet, getPlanetImage]);

  return (
    <Row
      left={
        <ItemList
          data={allPlanets}
          onItemSelected={getPlanet}
          allActions={getAllPlanets}
          loading={loadingPlanets}
        />
      }
      right={
        <ItemDetails data={planet} image={image} loading={loadingPlanets}>
          <Details field="Diameter: " label={planet?.diameter} />
          <Details field="Rotation Period: " label={planet?.rotation_period} />
          <Details field="Orbital Period: " label={planet?.orbital_period} />
          <Details field="Gravity: " label={planet?.gravity} />
          <Details field="Climate: " label={planet?.climate} />
          <Details field="Terrain: " label={planet?.terrain} />
          <Details field="Population: " label={planet?.population} />
        </ItemDetails>
      }
    />
  );
};

export default PlanetsPage;
