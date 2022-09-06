import React from "react";
import icon from "./img/death-star.png";
import "./ErrorIndicator.css";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <span className="boom">Error in App!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent drones to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
