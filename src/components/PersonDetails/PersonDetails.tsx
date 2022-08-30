import React from "react";
import "./PersonDetails.css";
import { useStarWars } from "../../hooks/useStarWars";

const PersonDetails = () => {
  const { people } = useStarWars();

  return (
    <>
      {people === null ? null : (
        <div className="person-details card">
          <img
            className="person-image"
            src={`https://starwars-visualguide.com/assets/img/characters/${people.id}.jpg`}
            alt=""
          />

          <div className="card-body">
            <h4>{people.name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Gender</span>
                <span>{people.gender}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Birth Year</span>
                <span>{people.birth_year}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonDetails;
