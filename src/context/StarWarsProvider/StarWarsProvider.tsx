import { Ichildren } from "../interface/Ichildren";
import React, { useState } from "react";
import { IPeople } from "../../store/reducers/peopleReducer/initialState/interface/IPeople";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { StarWarsContext } from "../StarWarsContext";
import { IPlanet } from "../../store/reducers/planetsReducer/initialState/interface/IPlanetState";
import { IStarship } from "../../store/reducers/starshipReducer/initialState/interface/IStarshipState";

export const StarWarsProvider = ({ children }: Ichildren) => {
  const [people, setPeople] = useState<IPeople | null>(null);
  const [planet, setPlanet] = useState<IPlanet | null>(null);
  const [starship, setStarship] = useState<IStarship | null>(null);
  const allPeople = useTypedSelector((state) => state.people.results);
  const allStarships = useTypedSelector((state) => state.starships.results);
  const allPlanets = useTypedSelector((state) => state.planets.results);

  const getPeople = (id: string) => {
    allPeople.filter((item) => {
      if (item.id === id) return setPeople(item);
    });
  };

  const getPlanet = (id: string) => {
    allPlanets.filter((item) => {
      if (item.id === id) return setPlanet(item);
    });
  };

  const getStarship = (id: string) => {
    allStarships.filter((item) => {
      if (item.id === id) return setStarship(item);
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
      }}
    >
      {children}
    </StarWarsContext.Provider>
  );
};
