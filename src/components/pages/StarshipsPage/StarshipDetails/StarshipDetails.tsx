import React from "react";
import { useStarWars } from "../../../../hooks/useStarWars";

const StarshipDetails = () => {
  const { starship } = useStarWars();
  return (
    <>
      {starship === null ? null : (
        <div className="card-details card">
          <img
            className="card-image"
            src={`https://starwars-visualguide.com/assets/img/starships/${starship.id}.jpg`}
            alt=""
          />

          <div className="card-body">
            <h4>{starship.name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Model</span>
                <span>{starship.model}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Starship Class</span>
                <span>{starship.starship_class}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Cost in Credits</span>
                <span>{starship.cost_in_credits}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default StarshipDetails;
