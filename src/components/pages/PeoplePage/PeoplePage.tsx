import React, { useEffect, useState } from "react";
import Row from "../Row/Row";
import ItemList from "../ItemList/ItemList";
import { useStarWars } from "../../../hooks/useStarWars";
import { useActions } from "../../../store/hooks/useActions";
import ItemDetails from "../ItemDetails/ItemDetails";
import Details from "../ItemDetails/Details/Details";
import Pagination from "../../Pagination/Pagination";

const PeoplePage = () => {
  const [image, setImage] = useState("");
  const {
    allPeople,
    getPeople,
    people,
    getPersonImage,
    loadingPeople,
    peoplePages,
    getPeoplePage,
  } = useStarWars();
  const { getAllPeople } = useActions();

  useEffect(() => {
    if (people === null) return;
    setImage(getPersonImage(people.id));
  }, [people, getPersonImage]);

  return (
    <>
      <Pagination pages={peoplePages} getPages={getPeoplePage} />
      <Row
        left={
          <ItemList
            data={allPeople}
            onItemSelected={getPeople}
            allActions={getAllPeople}
            loading={loadingPeople}
          />
        }
        right={
          <ItemDetails data={people} image={image} loading={loadingPeople}>
            <Details field="gender: " label={people?.gender} />
            <Details field="Birth Year: " label={people?.birth_year} />
          </ItemDetails>
        }
      />
    </>
  );
};

export default PeoplePage;
