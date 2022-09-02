import React from "react";
import Row from "../Row/Row";
import StarshipDetails from "./StarshipDetails/StarshipDetails";
import ItemList from "../ItemList/ItemList";
import { useStarWars } from "../../../hooks/useStarWars";
import { useActions } from "../../../store/hooks/useActions";

const StarshipsPage = () => {
  const { allStarships, getStarship } = useStarWars();
  const { getAllStarships } = useActions();
  return (
    <Row
      left={
        <ItemList
          data={allStarships}
          onItemSelected={getStarship}
          allActions={getAllStarships}
        />
      }
      right={<StarshipDetails />}
    />
  );
};

export default StarshipsPage;
