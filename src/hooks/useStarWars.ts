import { useContext } from "react";
import { StarWarsContext } from "../context/StarWarsContext";

export const useStarWars = () => {
  const {
    allPeople,
    allStarships,
    allPlanets,
    getPeople,
    getStarship,
    getPlanet,
    people,
    planet,
    starship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage,
    loadingPeople,
    loadingStarships,
    loadingPlanets,
    peopleHistory,
    planetHistory,
    starshipHistory,
    getPeoplePage,
    peoplePages,
  } = useContext(StarWarsContext);
  return {
    allPeople,
    allStarships,
    allPlanets,
    getPeople,
    getStarship,
    getPlanet,
    people,
    planet,
    starship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage,
    loadingPeople,
    loadingStarships,
    loadingPlanets,
    peopleHistory,
    planetHistory,
    starshipHistory,
    getPeoplePage,
    peoplePages,
  };
};
