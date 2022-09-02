import React from "react";
import PersonDetails from "./PersonDetails/PersonDetails";
import Row from "../Row/Row";
import ItemList from "../ItemList/ItemList";
import { useStarWars } from "../../../hooks/useStarWars";
import { useActions } from "../../../store/hooks/useActions";

const PeoplePage = () => {
  const { allPeople, getPeople } = useStarWars();
  const { getAllPeople } = useActions();
  return (
    <>
      <Row
        left={
          <ItemList
            data={allPeople}
            onItemSelected={getPeople}
            allActions={getAllPeople}
          />
        }
        right={<PersonDetails />}
      />
    </>
  );
};

export default PeoplePage;
