import React, { useEffect, useState } from "react";
import Row from "../Row/Row";
import ItemList from "../ItemList/ItemList";
import { useStarWars } from "../../../hooks/useStarWars";
import { useActions } from "../../../store/hooks/useActions";
import ItemDetails from "../ItemDetails/ItemDetails";
import Details from "../ItemDetails/Details/Details";

const StarshipsPage = () => {
  const [image, setImage] = useState("");
  const { allStarships, getStarship, starship, getStarshipImage } =
    useStarWars();
  const { getAllStarships } = useActions();

  useEffect(() => {
    if (starship === null) return;
    setImage(getStarshipImage(starship.id));
  }, [starship, getStarshipImage]);

  return (
    <Row
      left={
        <ItemList
          data={allStarships}
          onItemSelected={getStarship}
          allActions={getAllStarships}
        />
      }
      right={
        <ItemDetails data={starship} image={image}>
          <Details field="Model: " label={starship?.model} />
          <Details field="Starship Class: " label={starship?.starship_class} />
          <Details
            field="Const in credits: "
            label={starship?.cost_in_credits}
          />
        </ItemDetails>
      }
    />
  );
};

export default StarshipsPage;
