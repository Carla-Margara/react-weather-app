import axios from "axios";
import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeeklyForecast.css";

export default function WeeklyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "d6648610e3c1c3aed8194b8aaf46b519";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat={latitude}&lon={longitude}&appid={apiKey}`;
  axios.get(apiUrl).then(handleResponse);

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
