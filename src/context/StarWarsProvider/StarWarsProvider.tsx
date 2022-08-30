import { Ichildren } from "../interface/Ichildren";
import { useState } from "react";
import { IPeople } from "../../store/reducers/peopleReducer/initialState/interface/IPeople";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { StarWarsContext } from "../StarWarsContext";

export const StarWarsProvider = ({ children }: Ichildren) => {
  const [people, setPeople] = useState<IPeople | null>(null);
  const allPeople = useTypedSelector((state) => state.people.results);
  const allStarships = useTypedSelector((state) => state.starships.results);
  const allPlanets = useTypedSelector((state) => state.planets.results);

  const getPeople = (id: string) => {
    allPeople.filter((item) => {
      if (item.id === id) return setPeople(item);
    });
  };

  return (
    <StarWarsContext.Provider
      value={{ allPeople, allStarships, allPlanets, getPeople, people }}
    >
      {children}
    </StarWarsContext.Provider>
  );
};
