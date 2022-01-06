import React, { useState } from "react";
import axios from "axios";
import Loader from "react-js-loader";

export default function WeatherSearch() {
  let [WeatherSearch, SetWeatherSearch] = useState(false);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [city, setCity] = useState(null);
  let [icon, setIcon] = useState(null);

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "d6648610e3c1c3aed8194b8aaf46b519";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(getForecast);
  }

  function getForecast(response) {
    SetWeatherSearch(true);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (WeatherSearch) {
    return (
      <div className="Search">
        <div className={"item"}>
          <Loader
            type="heart"
            bgColor={"#FFFFFF"}
            color={"#FFFFFF"}
            size={100}
          />
        </div>
        <h1>Weather App</h1>
        <form onSubmit={handleSearch}>
          <input
            type="search"
            onChange={changeCity}
            placeholder="Enter a city..."
          />
          <input type="Submit" defaultValue="Search" />
        </form>
        <ul>
          <li>Temperature: {temperature}</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind:{wind}km/h </li>
          <li>
            <img src={icon} alt="" />
            {""}
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <div className={"item"}>
          <Loader
            type="heart"
            bgColor={"#AD075D"}
            color={"#AD075D"}
            size={100}
          />
        </div>
        <h1>Weather App</h1>
        <form onSubmit={handleSearch}>
          <input
            type="Search"
            placeholder="Enter a city..."
            onChange={changeCity}
          />
          <input type="Submit" defaultValue="Search" />
        </form>
        <h5>{""}</h5>
      </div>
    );
  }
}
