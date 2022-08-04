import React from "react";
import "./Trends.css";
import { TrendData } from "../../Data/TrendData";

const Trends = () => {
  return (
    <div className="trends">
      <h3>Trends for you</h3>
      {TrendData.map((trend, id) => (
        <div key={id} className="trend">
          <span>#{trend.name}</span>
          <span>{trend.shares}k shares</span>
        </div>
      ))}
    </div>
  );
};

export default Trends;
