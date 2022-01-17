import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeeklyForecast.css";

export default function WeeklyForecast() {
  return (
    <div className="WeeklyForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day mb-2">Tue</div>{" "}
          <WeatherIcon code="01d" size={36} />{" "}
          <div className="forecast-temperatures">
            <span className="max-temp">19°</span>{" "}
            <span className="min-temp">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
