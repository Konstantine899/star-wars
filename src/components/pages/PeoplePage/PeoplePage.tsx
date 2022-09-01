import React from "react";
import PersonList from "./PersonList/PersonList";
import PersonDetails from "./PersonDetails/PersonDetails";
import Row from "../Row/Row";

const PeoplePage = () => {
  return (
    <>
      <Row left={<PersonList />} right={<PersonDetails />} />
    </>
  );
};

export default PeoplePage;
