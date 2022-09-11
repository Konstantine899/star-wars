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

    loadingPeople,
    loadingStarships,
    loadingPlanets,
    peopleHistory,
    planetHistory,
    starshipHistory,
    getPeoplePage,
    peoplePages,
    planetPages,
    getPlanetPage,
    starshipsPages,
    getStarshipsPage,
    peopleImage,
    getPeopleImage,
    planetImage,
    getPlanetImage,
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

    loadingPeople,
    loadingStarships,
    loadingPlanets,
    peopleHistory,
    planetHistory,
    starshipHistory,
    getPeoplePage,
    peoplePages,
    planetPages,
    getPlanetPage,
    starshipsPages,
    getStarshipsPage,
    peopleImage,
    getPeopleImage,
    planetImage,
    getPlanetImage,
  };
};
