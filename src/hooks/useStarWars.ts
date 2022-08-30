import { useContext } from "react";
import { StarWarsContext } from "../context/StarWarsContext";

export const useStarWars = () => {
  const { allPeople, allStarships, allPlanets, getPeople, people } =
    useContext(StarWarsContext);
  return {
    allPeople,
    allStarships,
    allPlanets,
    getPeople,
    people,
  };
};
