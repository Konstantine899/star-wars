import React, { useEffect } from "react";
import Row from "../Row/Row";
import ItemList from "../ItemList/ItemList";
import { useStarWars } from "../../../hooks/useStarWars";
import { useActions } from "../../../store/hooks/useActions";
import ItemDetails from "../ItemDetails/ItemDetails";
import Details from "../ItemDetails/Details/Details";
import Pagination from "../../Pagination/Pagination";

const StarshipsPage = () => {
  const {
    allStarships,
    getStarship,
    starship,
    loadingStarships,
    starshipsPages,
    getStarshipsPage,
    getStarshipImage,
    starshipImage,
  } = useStarWars();
  const { getAllStarships } = useActions();

  useEffect(() => {
    if (starship === null) return;
    getStarshipImage(starship.id);
  }, [starship, getStarshipImage]);

  return (
    <>
      <Row
        left={<Pagination pages={starshipsPages} getPages={getStarshipsPage} />}
        right={<></>}
      />
      <Row
        left={
          <ItemList
            data={allStarships}
            onItemSelected={getStarship}
            allActions={getAllStarships}
            loading={loadingStarships}
          />
        }
        right={
          <ItemDetails
            data={starship}
            image={starshipImage}
            loading={loadingStarships}
          >
            <Details field="Model: " label={starship?.model} />
            <Details
              field="Starship Class: "
              label={starship?.starship_class}
            />
            <Details
              field="Const in credits: "
              label={starship?.cost_in_credits}
            />
          </ItemDetails>
        }
      />
    </>
  );
};

export default StarshipsPage;
