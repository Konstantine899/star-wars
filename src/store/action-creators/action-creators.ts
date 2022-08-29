import { PeopleActionTypes } from "../reducers/peopleReducer/enum/PeopleActionTypes";
import { Dispatch } from "redux";
import { TPeopleAction } from "../reducers/peopleReducer/types/TPeopleAction";
import {
  IPeople,
  IPeopleState,
} from "../reducers/peopleReducer/initialState/interface/IPeople";
import { TStarshipAction } from "../reducers/starshipReducer/types/TStarshipAction";
import { StarshipsActionTypes } from "../reducers/starshipReducer/enum/StarshipsActionTypes";
import {
  IStarship,
  IStarshipState,
} from "../reducers/starshipReducer/initialState/interface/IStarshipState";
import { TPlanetAction } from "../reducers/planetsReducer/types/TPlanetAction";
import { PlanetActionTypes } from "../reducers/planetsReducer/enum/PlanetActionTypes";
import {
  IPlanet,
  IPlanetState,
} from "../reducers/planetsReducer/initialState/interface/IPlanetState";

function extractId(body: any) {
  //Регулярка для поиска id в строке url
  const idReg = /\/([0-9]*)\/$/;
  return body.url.match(idReg)[1]; // return "number"
}

function transformPeople(body: IPeopleState) {
  return body.results.map((people: IPeople) => ({
    id: extractId(people),
    name: people.name,
    gender: people.gender,
    birth_year: people.birth_year,
  }));
}

function transformStarships(body: IStarshipState) {
  return body.results.map((starship: IStarship) => ({
    id: extractId(starship),
    name: starship.name,
    model: starship.model,
    cost_in_credits: starship.cost_in_credits,
    starship_class: starship.starship_class,
  }));
}

function transformPlanet(body: IPlanetState) {
  return body.results.map((planet: IPlanet) => ({
    id: extractId(planet),
    name: planet.name,
    rotation_period: planet.rotation_period,
    orbital_period: planet.orbital_period,
    diameter: planet.diameter,
    climate: planet.climate,
    gravity: planet.gravity,
    terrain: planet.terrain,
    population: planet.population,
  }));
}

export const getAllPeople = () => {
  return async (dispatch: Dispatch<TPeopleAction>) => {
    try {
      dispatch({ type: PeopleActionTypes.FETCH_PEOPLE });
      const response = await fetch(`https://swapi.dev/api/people/`);
      const body = await response.json();
      dispatch({
        type: PeopleActionTypes.FETCH_PEOPLE_SUCCESS,
        payload: transformPeople(body),
      });
    } catch (error) {
      dispatch({
        type: PeopleActionTypes.FETCH_PEOPLE_ERROR,
        payload: "Error loading People",
      });
    }
  };
};

export const getAllStarships = () => {
  return async (dispatch: Dispatch<TStarshipAction>) => {
    try {
      dispatch({ type: StarshipsActionTypes.FETCH_STARSHIPS });
      const response = await fetch(`https://swapi.dev/api/starships/`);
      const body = await response.json();
      dispatch({
        type: StarshipsActionTypes.FETCH_STARSHIPS_SUCCESS,
        payload: transformStarships(body),
      });
    } catch (error) {
      dispatch({
        type: StarshipsActionTypes.FETCH_STARSHIPS_ERROR,
        payload: "Error loading Starships",
      });
    }
  };
};

export const getAllPlanet = () => {
  return async (dispatch: Dispatch<TPlanetAction>) => {
    try {
      dispatch({ type: PlanetActionTypes.FETCH_PLANET });
      const response = await fetch(`https://swapi.dev/api/planets/`);
      const body = await response.json();
      dispatch({
        type: PlanetActionTypes.FETCH_PLANET_SUCCESS,
        payload: transformPlanet(body),
      });
    } catch (error) {
      dispatch({
        type: PlanetActionTypes.FETCH_PLANET_ERROR,
        payload: "Error loading Planets",
      });
    }
  };
};
