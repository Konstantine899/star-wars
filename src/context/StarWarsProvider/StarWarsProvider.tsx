import { Ichildren } from "../interface/Ichildren";
import React, { useState } from "react";
import { IPeople } from "../../store/reducers/people/peopleReducer/initialState/interface/IPeople";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { StarWarsContext } from "../StarWarsContext";
import { IPlanet } from "../../store/reducers/planets/planetsReducer/initialState/interface/IPlanetState";
import { IStarship } from "../../store/reducers/starships/starshipReducer/initialState/interface/IStarshipState";
import { useActions } from "../../store/hooks/useActions";

export const StarWarsProvider = ({ children }: Ichildren) => {
  const [people, setPeople] = useState<IPeople | null>(null);
  const [planet, setPlanet] = useState<IPlanet | null>(null);
  const [starship, setStarship] = useState<IStarship | null>(null);
  const allPeople = useTypedSelector((state) => state.people.results);
  const allStarships = useTypedSelector((state) => state.starships.results);
  const allPlanets = useTypedSelector((state) => state.planets.results);
  const loadingPeople = useTypedSelector((state) => state.people.loading);
  const loadingStarships = useTypedSelector((state) => state.starships.loading);
  const loadingPlanets = useTypedSelector((state) => state.planets.loading);
  const peopleHistory = useTypedSelector(
    (state) => state.peopleHistory.history
  );
  const planetHistory = useTypedSelector(
    (state) => state.planetHistory.history
  );
  const starshipHistory = useTypedSelector(
    (state) => state.starshipHistory.history
  );

  const peoplePages = useTypedSelector((state) => state.people.pages);
  const planetPages = useTypedSelector((state) => state.planets.pages);
  const starshipsPages = useTypedSelector((state) => state.starships.pages);

  const peopleImage = useTypedSelector((state) => state.peopleImage.image);
  const planetImage = useTypedSelector((state) => state.planetImage.image);
  const starshipImage = useTypedSelector((state) => state.starshipImage.image);

  const {
    peopleHistoryPush,
    planetHistoryPush,
    starshipHistoryPush,
    getPeoplePage,
    getPlanetPage,
    getStarshipsPage,
    getPeopleImage,
    getPlanetImage,
    getStarshipImage,
    searchPeople,
    searchPlanet,
    searchStarship,
  } = useActions();

  const getPeople = (id: string) => {
    allPeople.filter((item) => {
      if (item.id === id) {
        peopleHistoryPush(item);
        return setPeople(item);
      }
    });
  };

  const getPlanet = (id: string) => {
    allPlanets.filter((item) => {
      if (item.id === id) {
        planetHistoryPush(item);
        return setPlanet(item);
      }
    });
  };

  const getStarship = (id: string) => {
    allStarships.filter((item) => {
      if (item.id === id) {
        starshipHistoryPush(item);
        return setStarship(item);
      }
    });
  };

  return (
    <StarWarsContext.Provider
      value={{
        allPeople,
        allStarships,
        allPlanets,
        getPeople,
        getPlanet,
        getStarship,
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
        starshipImage,
        getStarshipImage,
        searchPeople,
        searchPlanet,
        searchStarship,
      }}
    >
      {children}
    </StarWarsContext.Provider>
  );
};
