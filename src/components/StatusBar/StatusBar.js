import React from "react";
import "./StatusBar.scss";

const StatusBar = () => {
  return (
    <div className="StatusBar">
      <div className="lifespan-container">
        <div className="time-container">
          <div className="age-container">
            <p className="age-text">Age: 15</p>
            <p className="age-text day-text">Day: 0</p>
          </div>
          <div className="pause-button">
            <span>Pause</span>
          </div>
        </div>
        <p className="total-lifespan">Lifespan: 120</p>
      </div>
    </div>
  );
};

export default StatusBar;
