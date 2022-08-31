import React from "react";

const RandomPlanetDefault = () => {
  return (
    <div className="random-planet jumbotron rounded">
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/5.jpg`}
        alt=""
      />
      <div>
        <h4>Dagobah</h4>
        <ul className="random-planet">
          <li className="random-planet-list-item">
            <span className="term">Population</span>
            <span>123124</span>
          </li>
          <li className="random-planet-list-item">
            <span className="term">Rotation Period</span>
            <span>43</span>
          </li>
          <li className="random-planet-list-item">
            <span className="term">Diameter</span>
            <span>100</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RandomPlanetDefault;
