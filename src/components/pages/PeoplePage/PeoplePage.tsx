import React, { useEffect } from "react";
import Row from "../Row/Row";
import ItemList from "../ItemList/ItemList";
import { useStarWars } from "../../../hooks/useStarWars";
import { useActions } from "../../../store/hooks/useActions";
import ItemDetails from "../ItemDetails/ItemDetails";
import Details from "../ItemDetails/Details/Details";
import Pagination from "../../Pagination/Pagination";

const PeoplePage = () => {
  const {
    allPeople,
    getPeople,
    people,
    loadingPeople,
    peoplePages,
    getPeoplePage,
    peopleImage,
    getPeopleImage,
  } = useStarWars();
  const { getAllPeople } = useActions();

  useEffect(() => {
    if (people === null) return;
    getPeopleImage(people.id);
  }, [people, getPeopleImage]);

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
          <ItemDetails
            data={people}
            image={peopleImage}
            loading={loadingPeople}
          >
            <Details field="gender: " label={people?.gender} />
            <Details field="Birth Year: " label={people?.birth_year} />
          </ItemDetails>
        }
      />
    </>
  );
};

export default PeoplePage;
