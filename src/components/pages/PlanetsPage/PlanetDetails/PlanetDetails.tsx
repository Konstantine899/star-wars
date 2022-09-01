import React from "react";
import { useStarWars } from "../../../../hooks/useStarWars";

const PlanetDetails = () => {
  const { planet } = useStarWars();
  return (
    <>
      {planet === null ? null : (
        <div className="card-details card">
          <img
            className="card-image"
            src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`}
            alt=""
          />

          <div className="card-body">
            <h4>{planet.name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Diameter</span>
                <span>{planet.diameter}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Rotation Period</span>
                <span>{planet.rotation_period}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Orbital Period</span>
                <span>{planet.orbital_period}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Gravity</span>
                <span>{planet.gravity}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Terrain</span>
                <span>{planet.terrain}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Population</span>
                <span>{planet.population}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Climate</span>
                <span>{planet.climate}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default PlanetDetails;
